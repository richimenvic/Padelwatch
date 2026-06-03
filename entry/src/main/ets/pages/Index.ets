import vibrator from '@ohos.vibrator'

@Entry
@Component
struct Index {
  @State puntosNosotros: string = '0'
  @State puntosRivales: string = '0'

  @State juegosNosotros: number = 0
  @State juegosRivales: number = 0

  @State setsNosotros: number = 0
  @State setsRivales: number = 0

  @State setActual: number = 1

  @State enTieBreak: boolean = false
  @State tieBreakNosotros: number = 0
  @State tieBreakRivales: number = 0

  @State enSuperTieBreak: boolean = false
  @State superTieNosotros: number = 0
  @State superTieRivales: number = 0

  @State decidirModoSet: boolean = false
  @State showMatchModeDecision: boolean = false
  @State decidirReglaDeuce: boolean = false
  @State reglaDeuceDecidida: boolean = false
  @State reglaDeuce: string = 'advantage'
  @State deuceReturns: number = 0
  @State partidoTerminado: boolean = false
  @State jugarConDiferenciaDos: boolean = false

  @State finalLine1: string = 'Set 1: -'
  @State finalLine2: string = 'Set 2: -'
  @State finalLine3: string = 'Set 3: -'
  @State mensaje: string = ''

  @State prevPuntosNosotros: string = '0'
  @State prevPuntosRivales: string = '0'
  @State prevJuegosNosotros: number = 0
  @State prevJuegosRivales: number = 0
  @State prevSetsNosotros: number = 0
  @State prevSetsRivales: number = 0
  @State prevSetActual: number = 1
  @State prevEnTieBreak: boolean = false
  @State prevTieBreakNosotros: number = 0
  @State prevTieBreakRivales: number = 0
  @State prevEnSuperTieBreak: boolean = false
  @State prevSuperTieNosotros: number = 0
  @State prevSuperTieRivales: number = 0
  @State prevDecidirModoSet: boolean = false
  @State prevShowMatchModeDecision: boolean = false
  @State prevDecidirReglaDeuce: boolean = false
  @State prevReglaDeuceDecidida: boolean = false
  @State prevReglaDeuce: string = 'advantage'
  @State prevDeuceReturns: number = 0
  @State prevPartidoTerminado: boolean = false
  @State prevJugarConDiferenciaDos: boolean = false
  @State prevFinalLine1: string = 'Set 1: -'
  @State prevFinalLine2: string = 'Set 2: -'
  @State prevFinalLine3: string = 'Set 3: -'
  @State hayDeshacer: boolean = false
  @State showResetConfirm: boolean = false
  @State appScreen: string = 'welcome'
  @State sacadorInicial: string = 'nosotros'
  @State configDeuceRule: string = 'ask'
  @State vibrationEnabled: boolean = true

  saveUndoState(): void {
    this.prevPuntosNosotros = this.puntosNosotros
    this.prevPuntosRivales = this.puntosRivales
    this.prevJuegosNosotros = this.juegosNosotros
    this.prevJuegosRivales = this.juegosRivales
    this.prevSetsNosotros = this.setsNosotros
    this.prevSetsRivales = this.setsRivales
    this.prevSetActual = this.setActual
    this.prevEnTieBreak = this.enTieBreak
    this.prevTieBreakNosotros = this.tieBreakNosotros
    this.prevTieBreakRivales = this.tieBreakRivales
    this.prevEnSuperTieBreak = this.enSuperTieBreak
    this.prevSuperTieNosotros = this.superTieNosotros
    this.prevSuperTieRivales = this.superTieRivales
    this.prevDecidirModoSet = this.decidirModoSet
    this.prevShowMatchModeDecision = this.showMatchModeDecision
    this.prevDecidirReglaDeuce = this.decidirReglaDeuce
    this.prevReglaDeuceDecidida = this.reglaDeuceDecidida
    this.prevReglaDeuce = this.reglaDeuce
    this.prevDeuceReturns = this.deuceReturns
    this.prevPartidoTerminado = this.partidoTerminado
    this.prevJugarConDiferenciaDos = this.jugarConDiferenciaDos
    this.prevFinalLine1 = this.finalLine1
    this.prevFinalLine2 = this.finalLine2
    this.prevFinalLine3 = this.finalLine3
    this.hayDeshacer = true
  }

  vibratePoint(): void {
    if (!this.vibrationEnabled) {
      return
    }

    try {
      vibrator.startVibration(
        {
          type: 'time',
          duration: 45
        },
        {
          id: 0,
          usage: 'touch'
        },
        (error) => {
          if (error) {
            console.error('Vibration failed: ' + JSON.stringify(error))
          }
        }
      )
    } catch (err) {
      console.error('Vibration exception: ' + JSON.stringify(err))
    }
  }
  vibrateFeedback(): void {
    try {
      vibrator.startVibration(
        {
          type: 'time',
          duration: 35
        },
        {
          id: 0,
          usage: 'touch'
        },
        (error) => {
          if (error) {
            console.error('Vibration feedback failed: ' + JSON.stringify(error))
          }
        }
      )
    } catch (err) {
      console.error('Vibration feedback exception: ' + JSON.stringify(err))
    }
  }
  addPoint(equipo: string): void {
    if (this.partidoTerminado || this.decidirModoSet || this.showMatchModeDecision || this.decidirReglaDeuce) {
      return
    }

    this.vibratePoint()
    this.saveUndoState()

    if (this.enSuperTieBreak) {
      this.addSuperTieBreakPoint(equipo)
      return
    }

    if (this.enTieBreak) {
      this.addTieBreakPoint(equipo)
      return
    }

    this.addNormalPoint(equipo)
  }

  addNormalPoint(equipo: string): void {
    if (this.puntosNosotros === 'AD') {
      if (equipo === 'nosotros') {
        this.winGame('nosotros')
      } else {
        this.puntosNosotros = '40'
        this.puntosRivales = '40'
        if (this.reglaDeuce === 'star') {
          this.deuceReturns++
        }
      }
      return
    }

    if (this.puntosRivales === 'AD') {
      if (equipo === 'rivales') {
        this.winGame('rivales')
      } else {
        this.puntosNosotros = '40'
        this.puntosRivales = '40'
        if (this.reglaDeuce === 'star') {
          this.deuceReturns++
        }
      }
      return
    }

    if (this.puntosNosotros === '40' && this.puntosRivales === '40') {
      if (!this.reglaDeuceDecidida) {
        this.decidirReglaDeuce = true
        this.mensaje = 'Elige 40-40'
        return
      }

      if (this.reglaDeuce === 'golden') {
        this.winGame(equipo)
        return
      }

      if (this.reglaDeuce === 'star' && this.deuceReturns >= 2) {
        this.winGame(equipo)
        return
      }

      if (equipo === 'nosotros') {
        this.puntosNosotros = 'AD'
      } else {
        this.puntosRivales = 'AD'
      }
      return
    }

    if (equipo === 'nosotros') {
      if (this.puntosNosotros === '40') {
        this.winGame('nosotros')
        return
      }
      this.puntosNosotros = this.nextPoint(this.puntosNosotros)
    } else {
      if (this.puntosRivales === '40') {
        this.winGame('rivales')
        return
      }
      this.puntosRivales = this.nextPoint(this.puntosRivales)
    }

    if (this.puntosNosotros === '40' && this.puntosRivales === '40' && !this.reglaDeuceDecidida) {
      this.decidirReglaDeuce = true
      this.mensaje = 'Elige 40-40'
    }
  }

  chooseAdvantageRule(): void {
    this.saveUndoState()
    this.decidirReglaDeuce = false
    this.reglaDeuceDecidida = true
    this.reglaDeuce = 'advantage'
    this.deuceReturns = 0
    this.mensaje = ''
  }

  chooseGoldenPoint(): void {
    this.saveUndoState()
    this.decidirReglaDeuce = false
    this.reglaDeuceDecidida = true
    this.reglaDeuce = 'golden'
    this.deuceReturns = 0
    this.mensaje = ''
  }

  chooseStarPoint(): void {
    this.saveUndoState()
    this.decidirReglaDeuce = false
    this.reglaDeuceDecidida = true
    this.reglaDeuce = 'star'
    this.deuceReturns = 0
    this.mensaje = ''
  }

  nextPoint(punto: string): string {
    if (punto === '0') {
      return '15'
    }
    if (punto === '15') {
      return '30'
    }
    if (punto === '30') {
      return '40'
    }
    return '0'
  }

  winGame(equipo: string): void {
    if (equipo === 'nosotros') {
      this.juegosNosotros++
    } else {
      this.juegosRivales++
    }

    this.puntosNosotros = '0'
    this.puntosRivales = '0'
    this.deuceReturns = 0

    if (this.juegosNosotros === 6 && this.juegosRivales === 6 && !this.jugarConDiferenciaDos) {
      this.decidirModoSet = true
      this.mensaje = 'Elige modo 6-6'
      return
    }

    this.checkSetWinner()
  }

  chooseTieBreak(): void {
    this.saveUndoState()
    this.decidirModoSet = false
    this.enTieBreak = true
    this.jugarConDiferenciaDos = false
    this.tieBreakNosotros = 0
    this.tieBreakRivales = 0
    this.puntosNosotros = '0'
    this.puntosRivales = '0'
    this.deuceReturns = 0
    this.mensaje = ''
  }

  chooseDifferenceTwo(): void {
    this.saveUndoState()
    this.decidirModoSet = false
    this.enTieBreak = false
    this.jugarConDiferenciaDos = true
    this.puntosNosotros = '0'
    this.puntosRivales = '0'
    this.deuceReturns = 0
    this.mensaje = ''
  }

  addTieBreakPoint(equipo: string): void {
    if (equipo === 'nosotros') {
      this.tieBreakNosotros++
    } else {
      this.tieBreakRivales++
    }

    this.puntosNosotros = this.tieBreakNosotros.toString()
    this.puntosRivales = this.tieBreakRivales.toString()

    if (this.tieBreakNosotros >= 7 && this.tieBreakNosotros - this.tieBreakRivales >= 2) {
      this.juegosNosotros = 7
      this.juegosRivales = 6
      this.winSet('nosotros')
      return
    }

    if (this.tieBreakRivales >= 7 && this.tieBreakRivales - this.tieBreakNosotros >= 2) {
      this.juegosNosotros = 6
      this.juegosRivales = 7
      this.winSet('rivales')
      return
    }
  }

  addSuperTieBreakPoint(equipo: string): void {
    if (equipo === 'nosotros') {
      this.superTieNosotros++
    } else {
      this.superTieRivales++
    }

    this.puntosNosotros = this.superTieNosotros.toString()
    this.puntosRivales = this.superTieRivales.toString()

    if (this.superTieNosotros >= 10 && this.superTieNosotros - this.superTieRivales >= 2) {
      this.finishMatchBySuperTieBreak('nosotros')
      return
    }

    if (this.superTieRivales >= 10 && this.superTieRivales - this.superTieNosotros >= 2) {
      this.finishMatchBySuperTieBreak('rivales')
      return
    }
  }

  checkSetWinner(): void {
    if (this.juegosNosotros >= 6 && this.juegosNosotros - this.juegosRivales >= 2) {
      this.winSet('nosotros')
      return
    }

    if (this.juegosRivales >= 6 && this.juegosRivales - this.juegosNosotros >= 2) {
      this.winSet('rivales')
      return
    }
  }

  saveSetResult(): void {
    if (this.setActual === 1) {
      this.finalLine1 = 'Set 1: ' + this.juegosNosotros + '-' + this.juegosRivales
    }
    if (this.setActual === 2) {
      this.finalLine2 = 'Set 2: ' + this.juegosNosotros + '-' + this.juegosRivales
    }
    if (this.setActual === 3) {
      this.finalLine3 = 'Set 3: ' + this.juegosNosotros + '-' + this.juegosRivales
    }
  }

  winSet(equipo: string): void {
    this.saveSetResult()

    if (equipo === 'nosotros') {
      this.setsNosotros++
    } else {
      this.setsRivales++
    }

    this.enTieBreak = false
    this.tieBreakNosotros = 0
    this.tieBreakRivales = 0
    this.jugarConDiferenciaDos = false
    this.puntosNosotros = '0'
    this.puntosRivales = '0'
    this.deuceReturns = 0

    if (this.setsNosotros === 2 || this.setsRivales === 2) {
      this.partidoTerminado = true
      this.mensaje = this.setsNosotros === 2 ? 'Ganamos' : 'Rivales ganan'
      return
    }

    if (this.setsNosotros === 1 && this.setsRivales === 1) {
      this.showMatchModeDecision = true
      this.mensaje = 'Elige final'
      return
    }

    this.setActual++
    this.juegosNosotros = 0
    this.juegosRivales = 0
  }

  chooseThirdSet(): void {
    this.saveUndoState()
    this.showMatchModeDecision = false
    this.setActual = 3
    this.juegosNosotros = 0
    this.juegosRivales = 0
    this.puntosNosotros = '0'
    this.puntosRivales = '0'
    this.deuceReturns = 0
    this.mensaje = ''
  }

  chooseSuperTieBreak(): void {
    this.saveUndoState()
    this.showMatchModeDecision = false
    this.enSuperTieBreak = true
    this.setActual = 3
    this.juegosNosotros = 0
    this.juegosRivales = 0
    this.superTieNosotros = 0
    this.superTieRivales = 0
    this.puntosNosotros = '0'
    this.puntosRivales = '0'
    this.deuceReturns = 0
    this.mensaje = ''
  }

  finishMatchBySuperTieBreak(equipo: string): void {
    this.finalLine3 = 'Super TB: ' + this.superTieNosotros + '-' + this.superTieRivales

    if (equipo === 'nosotros') {
      this.setsNosotros = 2
      this.setsRivales = 1
      this.mensaje = 'Ganamos'
    } else {
      this.setsNosotros = 1
      this.setsRivales = 2
      this.mensaje = 'Rivales ganan'
    }

    this.enSuperTieBreak = false
    this.partidoTerminado = true
  }

  canReturnToServerSelection(): boolean {
    return this.appScreen === 'match' &&
      !this.hayDeshacer &&
      this.puntosNosotros === '0' &&
      this.puntosRivales === '0' &&
      this.juegosNosotros === 0 &&
      this.juegosRivales === 0 &&
      this.setsNosotros === 0 &&
      this.setsRivales === 0 &&
      !this.enTieBreak &&
      !this.enSuperTieBreak &&
      !this.partidoTerminado
  }
  undoPoint(): void {
    if (!this.hayDeshacer) {
      if (this.canReturnToServerSelection()) {
        this.appScreen = 'server'
      }
      return
    }

    this.puntosNosotros = this.prevPuntosNosotros
    this.puntosRivales = this.prevPuntosRivales
    this.juegosNosotros = this.prevJuegosNosotros
    this.juegosRivales = this.prevJuegosRivales
    this.setsNosotros = this.prevSetsNosotros
    this.setsRivales = this.prevSetsRivales
    this.setActual = this.prevSetActual
    this.enTieBreak = this.prevEnTieBreak
    this.tieBreakNosotros = this.prevTieBreakNosotros
    this.tieBreakRivales = this.prevTieBreakRivales
    this.enSuperTieBreak = this.prevEnSuperTieBreak
    this.superTieNosotros = this.prevSuperTieNosotros
    this.superTieRivales = this.prevSuperTieRivales
    this.decidirModoSet = this.prevDecidirModoSet
    this.showMatchModeDecision = this.prevShowMatchModeDecision
    this.decidirReglaDeuce = this.prevDecidirReglaDeuce
    this.reglaDeuceDecidida = this.prevReglaDeuceDecidida
    this.reglaDeuce = this.prevReglaDeuce
    this.deuceReturns = this.prevDeuceReturns
    this.partidoTerminado = this.prevPartidoTerminado
    this.jugarConDiferenciaDos = this.prevJugarConDiferenciaDos
    this.finalLine1 = this.prevFinalLine1
    this.finalLine2 = this.prevFinalLine2
    this.finalLine3 = this.prevFinalLine3
    this.hayDeshacer = false
  }

  requestReset(): void {
    if (this.partidoTerminado) {
      this.resetMatch()
      this.appScreen = 'server'
      return
    }
    this.showResetConfirm = true
  }

  cancelReset(): void {
    this.showResetConfirm = false
  }

  confirmReset(): void {
    this.showResetConfirm = false
    this.resetMatch()
    this.appScreen = 'server'
  }

  resetMatch(): void {
    this.puntosNosotros = '0'
    this.puntosRivales = '0'
    this.juegosNosotros = 0
    this.juegosRivales = 0
    this.setsNosotros = 0
    this.setsRivales = 0
    this.setActual = 1
    this.enTieBreak = false
    this.tieBreakNosotros = 0
    this.tieBreakRivales = 0
    this.enSuperTieBreak = false
    this.superTieNosotros = 0
    this.superTieRivales = 0
    this.decidirModoSet = false
    this.showMatchModeDecision = false
    this.decidirReglaDeuce = false
    this.reglaDeuceDecidida = false
    this.reglaDeuce = 'advantage'
    this.deuceReturns = 0
    this.partidoTerminado = false
    this.jugarConDiferenciaDos = false
    this.finalLine1 = 'Set 1: -'
    this.finalLine2 = 'Set 2: -'
    this.finalLine3 = 'Set 3: -'
    this.mensaje = ''
    this.hayDeshacer = false
    this.showResetConfirm = false
  }

  estadoCentro(): string {
    if (this.enSuperTieBreak) {
      return 'SUPER TB'
    }
    if (this.enTieBreak) {
      return 'TIE-BREAK'
    }
    if (this.puntosNosotros === 'AD' || this.puntosRivales === 'AD') {
      return 'VENTAJA'
    }
    if (this.puntosNosotros === '40' && this.puntosRivales === '40') {
      if (this.reglaDeuce === 'golden') {
        return 'BOLA ORO'
      }
      if (this.reglaDeuce === 'star') {
        if (this.deuceReturns >= 2) {
          return 'STAR POINT'
        }
        return 'DEUCE ' + (this.deuceReturns + 1).toString() + '/2'
      }
      return 'DEUCE'
    }
    if (this.jugarConDiferenciaDos) {
      return 'DIF. 2'
    }
    return 'SET ' + this.setActual
  }

  estadoCentroSecundario(): string {
    if (this.puntosNosotros === '40' && this.puntosRivales === '40' && this.reglaDeuce === 'star' && this.deuceReturns >= 2) {
      return 'Recibe elige lado'
    }
    return ''
  }

  sacadorActual(): string {
    let totalJuegos: number = this.juegosNosotros + this.juegosRivales
    if (totalJuegos % 2 === 0) {
      return this.sacadorInicial
    }
    return this.oppositeTeam(this.sacadorInicial)
  }

  nombreEquipo(equipo: string): string {
    if (equipo === this.sacadorActual()) {
      return equipo === 'nosotros' ? '🎾 NOSOTROS' : '🎾 RIVALES'
    }
    return equipo === 'nosotros' ? 'NOSOTROS' : 'RIVALES'
  }

  applyDeuceConfig(): void {
    if (this.configDeuceRule === 'ask') {
      this.reglaDeuceDecidida = false
      this.reglaDeuce = 'advantage'
    } else {
      this.reglaDeuceDecidida = true
      this.reglaDeuce = this.configDeuceRule
    }
    this.deuceReturns = 0
  }

  chooseConfigDeuceRule(rule: string): void {
    this.configDeuceRule = rule
  }

  cycleConfigDeuceRule(): void {
    if (this.configDeuceRule === 'ask') {
      this.configDeuceRule = 'advantage'
      return
    }
    if (this.configDeuceRule === 'advantage') {
      this.configDeuceRule = 'golden'
      return
    }
    if (this.configDeuceRule === 'golden') {
      this.configDeuceRule = 'star'
      return
    }
    this.configDeuceRule = 'ask'
  }
  configDeuceLabel(): string {
    if (this.configDeuceRule === 'advantage') {
      return 'Ventaja'
    }
    if (this.configDeuceRule === 'golden') {
      return 'Bola oro'
    }
    if (this.configDeuceRule === 'star') {
      return 'Star Point'
    }
    return 'Preguntar'
  }

  toggleVibration(): void {
    this.vibrationEnabled = !this.vibrationEnabled
    this.vibrateFeedback()
  }

  vibrationConfigLabel(): string {
    return this.vibrationEnabled ? 'Vibración ON' : 'Vibración OFF'
  }
  startSetupFromWelcome(): void {
    this.resetMatch()
    this.appScreen = 'server'
  }

  openSettings(): void {
    this.appScreen = 'settings'
  }

  backToWelcome(): void {
    this.appScreen = 'welcome'
  }

  startMatchWithServer(equipo: string): void {
    this.sacadorInicial = equipo
    this.applyDeuceConfig()
    this.appScreen = 'match'
  }

  oppositeTeam(equipo: string): string {
    return equipo === 'nosotros' ? 'rivales' : 'nosotros'
  }
  build() {
    Column() {
      if (this.appScreen === 'welcome') {
        Column() {
          Text('PadelScoreGT5')
            .fontSize(20)
            .fontWeight(FontWeight.Bold)
            .fontColor(Color.White)
            .textAlign(TextAlign.Center)
            .width('100%')
            .height(34)

          Button('INICIAR PARTIDO')
            .fontSize(17)
            .fontWeight(FontWeight.Bold)
            .width(176)
            .height(54)
            .borderRadius(27)
            .backgroundColor('#C600D9')
            .margin({ top: 18, bottom: 12 })
            .onClick(() => {
              this.startSetupFromWelcome()
            })

          Button('Ajustes')
            .fontSize(11)
            .width(118)
            .height(28)
            .borderRadius(14)
            .backgroundColor('#3A3A3A')
        }
        .width('100%')
        .height('100%')
        .justifyContent(FlexAlign.Center)
        .alignItems(HorizontalAlign.Center)
      } else if (this.appScreen === 'settings') {
        Column() {
          Text('Ajustes')
            .fontSize(19)
            .fontWeight(FontWeight.Bold)
            .fontColor(Color.White)
            .height(34)

          Button('40-40: ' + this.configDeuceLabel())
            .fontSize(13)
            .fontWeight(FontWeight.Bold)
            .width(176)
            .height(42)
            .borderRadius(21)
            .backgroundColor(this.configDeuceRule === 'star' ? '#FF9300' : '#C600D9')
            .margin({ top: 10, bottom: 10 })
            .onClick(() => {
              this.cycleConfigDeuceRule()
            })

          Button(this.vibrationConfigLabel())
            .fontSize(13)
            .fontWeight(FontWeight.Bold)
            .width(176)
            .height(42)
            .borderRadius(21)
            .backgroundColor(this.vibrationEnabled ? '#0FA968' : '#3A3A3A')
            .margin({ bottom: 10 })
            .onClick(() => {
              this.toggleVibration()
            })

          Button('Volver')
            .fontSize(12)
            .width(120)
            .height(32)
            .borderRadius(16)
            .backgroundColor('#3A3A3A')
            .onClick(() => {
              this.backToWelcome()
            })
        }
        .width('100%')
        .height('100%')
        .justifyContent(FlexAlign.Center)
        .alignItems(HorizontalAlign.Center)
      } else if (this.appScreen === 'server') {
        Column() {
          Column() {
            Text('NOSOTROS')
              .fontSize(26)
              .fontWeight(FontWeight.Bold)
              .fontColor(Color.White)
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(38)

            Text('Tocar para elegir saque')
              .fontSize(11)
              .fontColor('#F0F0F0')
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(18)
          }
          .width('100%')
          .layoutWeight(1)
          .padding({ left: 8, right: 8, top: 8, bottom: 6 })
          .backgroundColor('#C600D9')
          .justifyContent(FlexAlign.Center)
          .alignItems(HorizontalAlign.Center)
          .onClick(() => {
            this.startMatchWithServer('nosotros')
          })

          Row() {
            Text('¿QUIÉN SACA PRIMERO?')
              .fontSize(12)
              .fontWeight(FontWeight.Bold)
              .fontColor(Color.White)
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(40)
          }
          .width('100%')
          .height(40)
          .justifyContent(FlexAlign.Center)
          .alignItems(VerticalAlign.Center)
          .backgroundColor('#000000')

          Column() {
            Text('RIVALES')
              .fontSize(26)
              .fontWeight(FontWeight.Bold)
              .fontColor(Color.White)
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(38)

            Text('Tocar para elegir saque')
              .fontSize(11)
              .fontColor('#F0F0F0')
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(18)
          }
          .width('100%')
          .layoutWeight(1)
          .padding({ left: 8, right: 8, top: 8, bottom: 6 })
          .backgroundColor('#FF9300')
          .justifyContent(FlexAlign.Center)
          .alignItems(HorizontalAlign.Center)
          .onClick(() => {
            this.startMatchWithServer('rivales')
          })
        }
        .width('100%')
        .height('100%')
        .justifyContent(FlexAlign.Center)
        .alignItems(HorizontalAlign.Center)
      } else if (this.showResetConfirm) {
        Column() {
          Text('¿Reiniciar partido?')
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .fontColor(Color.White)
            .maxLines(1)
            .textAlign(TextAlign.Center)
            .width('100%')
            .height(22)

          Text('Mantén presionado')
            .fontSize(10)
            .fontColor('#CCCCCC')
            .maxLines(1)
            .textAlign(TextAlign.Center)
            .width('100%')
            .height(18)

          Button('RESET')
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .width(115)
            .height(48)
            .borderRadius(24)
            .backgroundColor('#D64545')
            .margin({ top: 8, bottom: 8 })
            .gesture(
              LongPressGesture({ repeat: false, duration: 1600 })
                .onAction(() => {
                  this.confirmReset()
                })
            )

          Button('Cancelar')
            .fontSize(10)
            .width(92)
            .height(22)
                .borderRadius(11)
                .backgroundColor('#3A3A3A')
            .onClick(() => {
              this.cancelReset()
            })
        }
        .width('100%')
        .height('100%')
        .justifyContent(FlexAlign.Center)
        .alignItems(HorizontalAlign.Center)
      } else if (this.partidoTerminado) {
        Column() {
          Column() {
            Text(this.mensaje)
              .fontSize(22)
              .fontWeight(FontWeight.Bold)
              .fontColor(Color.White)
              .maxLines(1)
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(22)

            Text(this.finalLine1)
              .fontSize(12)
              .fontColor(Color.White)
              .maxLines(1)
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(18)

            Text(this.finalLine2)
              .fontSize(12)
              .fontColor(Color.White)
              .maxLines(1)
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(18)

            Text(this.finalLine3)
              .fontSize(12)
              .fontColor(Color.White)
              .maxLines(1)
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(18)
          }
          .width(172)
          .height(104)
          .padding({ left: 8, right: 8, top: 10, bottom: 8 })
          .borderRadius(18)
          .backgroundColor(this.setsNosotros === 2 ? '#0FA968' : '#D45A2A')
          .justifyContent(FlexAlign.Center)
          .alignItems(HorizontalAlign.Center)

          Button('Nuevo')
            .fontSize(10)
            .width(78)
            .height(22)
                .borderRadius(11)
                .backgroundColor('#3A3A3A')
            .margin({ top: 8 })
            .onClick(() => {
              this.resetMatch()
            })
        }
        .width('100%')
        .height('100%')
        .justifyContent(FlexAlign.Center)
        .alignItems(HorizontalAlign.Center)
      } else if (this.decidirReglaDeuce) {
        Column() {
          Text('Sistema 40-40')
            .fontSize(17)
            .fontWeight(FontWeight.Bold)
            .fontColor(Color.White)
            .maxLines(1)
            .textAlign(TextAlign.Center)
            .width('100%')
            .height(22)

          Button('Ventaja')
            .fontSize(13)
            .fontWeight(FontWeight.Bold)
            .width(138)
            .height(22)
                .borderRadius(11)
                .backgroundColor('#3A3A3A')
            .margin({ top: 4 })
            .onClick(() => {
              this.chooseAdvantageRule()
            })

          Button('Bola de oro')
            .fontSize(13)
            .fontWeight(FontWeight.Bold)
            .width(138)
            .height(22)
            .borderRadius(12)
            .backgroundColor('#C600D9')
            .margin({ top: 5 })
            .onClick(() => {
              this.chooseGoldenPoint()
            })

          Button('Star Point')
            .fontSize(13)
            .fontWeight(FontWeight.Bold)
            .width(138)
            .height(22)
            .borderRadius(12)
            .backgroundColor('#FF9300')
            .margin({ top: 5 })
            .onClick(() => {
              this.chooseStarPoint()
            })
        }
        .width('100%')
        .height('100%')
        .justifyContent(FlexAlign.Center)
        .alignItems(HorizontalAlign.Center)
      } else if (this.decidirModoSet) {
        Column() {
          Text('6 - 6')
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .fontColor(Color.White)
            .margin({ bottom: 6 })

          Button('Tie-break')
            .fontSize(10)
            .width(106)
            .height(22)
            .margin({ bottom: 6 })
            .onClick(() => {
              this.chooseTieBreak()
            })

          Button('Dif. 2')
            .fontSize(10)
            .width(106)
            .height(22)
            .onClick(() => {
              this.chooseDifferenceTwo()
            })
        }
        .width('100%')
        .height('100%')
        .justifyContent(FlexAlign.Center)
        .alignItems(HorizontalAlign.Center)
      } else if (this.showMatchModeDecision) {
        Column() {
          Text('Sets 1 - 1')
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .fontColor(Color.White)
            .margin({ bottom: 6 })

          Button('3er Set')
            .fontSize(10)
            .width(106)
            .height(22)
            .margin({ bottom: 6 })
            .onClick(() => {
              this.chooseThirdSet()
            })

          Button('Super TB')
            .fontSize(10)
            .width(106)
            .height(22)
            .onClick(() => {
              this.chooseSuperTieBreak()
            })
        }
        .width('100%')
        .height('100%')
        .justifyContent(FlexAlign.Center)
        .alignItems(HorizontalAlign.Center)
      } else {
        Column() {
          Column() {
            Text(this.nombreEquipo('nosotros'))
              .fontSize(13)
              .fontWeight(FontWeight.Bold)
              .fontColor(Color.White)
              .maxLines(1)
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(18)

            Text('Sets ' + this.setsNosotros + ' | Juegos ' + this.juegosNosotros)
              .fontSize(10)
              .fontColor('#F0F0F0')
              .maxLines(1)
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(14)

            Text(this.puntosNosotros)
              .fontSize(44)
              .fontWeight(FontWeight.Bold)
              .fontColor(Color.White)
              .maxLines(1)
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(60)
          }
          .width('100%')
          .layoutWeight(1)
          .padding({ left: 8, right: 8, top: 8, bottom: 6 })
          .borderRadius(0)
          .backgroundColor('#C600D9')
          .justifyContent(FlexAlign.Center)
          .alignItems(HorizontalAlign.Center)
          .onClick(() => {
            this.addPoint('nosotros')
          })

          Row() {
            Button('Undo')
              .fontSize(10)
              .width(78)
              .height(20)
              .borderRadius(12)
              .backgroundColor('#3A3A3A')
              .enabled(this.hayDeshacer || this.canReturnToServerSelection())
              .onClick(() => {
                this.undoPoint()
              })
              .responseRegion({ x: -35, y: -35, width: 150, height: 95 })

            Column() {
              Text(this.estadoCentro())
                .fontSize(12)
                .fontWeight(FontWeight.Bold)
                .fontColor('#FFFFFF')
                .maxLines(1)
                .textAlign(TextAlign.Center)
                .width(90)
                .height(13)

              Text(this.estadoCentroSecundario())
                .fontSize(7)
                .fontColor('#DDDDDD')
                .maxLines(1)
                .textAlign(TextAlign.Center)
                .width(78)
                .height(0)
            }
            .width(78)
            .height(20)
            .justifyContent(FlexAlign.Center)
            .alignItems(HorizontalAlign.Center)

            Button('Reset')
              .fontSize(10)
              .width(78)
              .height(20)
              .borderRadius(12)
              .backgroundColor('#3A3A3A')
              .onClick(() => {
                this.requestReset()
              })
              .responseRegion({ x: -35, y: -35, width: 150, height: 95 })
          }
          .width('100%')
          .height(40)
          .justifyContent(FlexAlign.SpaceBetween)
          .alignItems(VerticalAlign.Center)
          .margin({ top: 0, bottom: 0 })

          Column() {
            Text(this.nombreEquipo('rivales'))
              .fontSize(13)
              .fontWeight(FontWeight.Bold)
              .fontColor(Color.White)
              .maxLines(1)
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(18)

            Text('Sets ' + this.setsRivales + ' | Juegos ' + this.juegosRivales)
              .fontSize(10)
              .fontColor('#F0F0F0')
              .maxLines(1)
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(14)

            Text(this.puntosRivales)
              .fontSize(44)
              .fontWeight(FontWeight.Bold)
              .fontColor(Color.White)
              .maxLines(1)
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(60)
          }
          .width('100%')
          .layoutWeight(1)
          .padding({ left: 8, right: 8, top: 8, bottom: 6 })
          .borderRadius(0)
          .backgroundColor('#FF9300')
          .justifyContent(FlexAlign.Center)
          .alignItems(HorizontalAlign.Center)
          .onClick(() => {
            this.addPoint('rivales')
          })
        }
        .width('100%')
        .height('100%')
        .justifyContent(FlexAlign.Center)
        .alignItems(HorizontalAlign.Center)
      }
    }
    .width('100%')
    .height('100%')
    .padding({ left: 0, right: 0, top: 0, bottom: 0 })
    .backgroundColor('#000000')
  }
}














































