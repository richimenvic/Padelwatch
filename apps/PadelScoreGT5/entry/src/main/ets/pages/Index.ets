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
  @State usarBolaDeOro: boolean = false

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
  @State prevUsarBolaDeOro: boolean = false
  @State prevPartidoTerminado: boolean = false
  @State prevJugarConDiferenciaDos: boolean = false
  @State prevFinalLine1: string = 'Set 1: -'
  @State prevFinalLine2: string = 'Set 2: -'
  @State prevFinalLine3: string = 'Set 3: -'

  @State hayDeshacer: boolean = false
  @State showResetConfirm: boolean = false

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
    this.prevUsarBolaDeOro = this.usarBolaDeOro
    this.prevPartidoTerminado = this.partidoTerminado
    this.prevJugarConDiferenciaDos = this.jugarConDiferenciaDos
    this.prevFinalLine1 = this.finalLine1
    this.prevFinalLine2 = this.finalLine2
    this.prevFinalLine3 = this.finalLine3
    this.hayDeshacer = true
  }

  vibratePoint(): void {
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

  addPoint(equipo: string): void {
    if (
      this.partidoTerminado ||
      this.decidirModoSet ||
      this.showMatchModeDecision ||
      this.decidirReglaDeuce
    ) {
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
      }
      return
    }

    if (this.puntosRivales === 'AD') {
      if (equipo === 'rivales') {
        this.winGame('rivales')
      } else {
        this.puntosNosotros = '40'
        this.puntosRivales = '40'
      }
      return
    }

    if (this.puntosNosotros === '40' && this.puntosRivales === '40') {
      if (!this.reglaDeuceDecidida) {
        this.decidirReglaDeuce = true
        this.mensaje = 'Elige 40-40'
        return
      }

      if (this.usarBolaDeOro) {
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

    if (
      this.puntosNosotros === '40' &&
      this.puntosRivales === '40' &&
      !this.reglaDeuceDecidida
    ) {
      this.decidirReglaDeuce = true
      this.mensaje = 'Elige 40-40'
    }
  }

  chooseGoldenPoint(): void {
    this.saveUndoState()
    this.decidirReglaDeuce = false
    this.reglaDeuceDecidida = true
    this.usarBolaDeOro = true
    this.mensaje = ''
  }

  chooseAdvantageRule(): void {
    this.saveUndoState()
    this.decidirReglaDeuce = false
    this.reglaDeuceDecidida = true
    this.usarBolaDeOro = false
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
    this.mensaje = ''
  }

  chooseDifferenceTwo(): void {
    this.saveUndoState()
    this.decidirModoSet = false
    this.enTieBreak = false
    this.jugarConDiferenciaDos = true
    this.puntosNosotros = '0'
    this.puntosRivales = '0'
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

  undoPoint(): void {
    if (!this.hayDeshacer) {
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
    this.usarBolaDeOro = this.prevUsarBolaDeOro
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
    this.usarBolaDeOro = false
    this.partidoTerminado = false
    this.jugarConDiferenciaDos = false
    this.finalLine1 = 'Set 1: -'
    this.finalLine2 = 'Set 2: -'
    this.finalLine3 = 'Set 3: -'
    this.mensaje = ''
    this.hayDeshacer = false
    this.showResetConfirm = false
  }

  estadoSuperior(): string {
    if (this.partidoTerminado) {
      return 'Resultado'
    }

    if (this.enSuperTieBreak) {
      return 'Super TB'
    }

    if (this.enTieBreak) {
      return 'Tie-break'
    }

    return 'Set ' + this.setActual
  }

  estadoJuegos(): string {
    if (this.enSuperTieBreak) {
      return 'Super TB ' + this.superTieNosotros + '-' + this.superTieRivales
    }

    if (this.enTieBreak) {
      return 'Tie-break ' + this.tieBreakNosotros + '-' + this.tieBreakRivales
    }

    if (this.jugarConDiferenciaDos) {
      return 'Dif. 2  ' + this.juegosNosotros + '-' + this.juegosRivales
    }

    return 'Juegos ' + this.juegosNosotros + '-' + this.juegosRivales
  }

  build() {
    Column() {
      Text(this.estadoSuperior() + '   Sets ' + this.setsNosotros + '-' + this.setsRivales)
        .fontSize(14)
        .fontWeight(FontWeight.Bold)
        .fontColor(Color.White)
        .maxLines(1)
        .textAlign(TextAlign.Center)
        .width('100%')
        .height(20)

      Text(this.estadoJuegos())
        .fontSize(12)
        .fontColor(Color.White)
        .maxLines(1)
        .textAlign(TextAlign.Center)
        .width('100%')
        .height(16)

      if (this.showResetConfirm) {
        Column() {
          Text('¿Reiniciar partido?')
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .fontColor(Color.White)
            .maxLines(1)
            .textAlign(TextAlign.Center)
            .width('100%')
            .height(28)

          Text('Mantén presionado')
            .fontSize(11)
            .fontColor('#CCCCCC')
            .maxLines(1)
            .textAlign(TextAlign.Center)
            .width('100%')
            .height(18)

          Button('RESET')
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .width(150)
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
            .fontSize(11)
            .width(92)
            .height(24)
            .borderRadius(12)
            .backgroundColor('#3A3A3A')
            .onClick(() => {
              this.cancelReset()
            })
        }
        .width('100%')
        .height(150)
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
              .height(30)

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
        }
        .width('100%')
        .height(120)
        .justifyContent(FlexAlign.Center)
        .alignItems(HorizontalAlign.Center)
      } else if (this.decidirReglaDeuce) {
        Column() {
          Text('40 - 40')
            .fontSize(24)
            .fontWeight(FontWeight.Bold)
            .fontColor(Color.White)
            .maxLines(1)
            .textAlign(TextAlign.Center)
            .width('100%')
            .height(34)

          Row() {
            Column() {
              Text('Bola oro')
                .fontSize(15)
                .fontWeight(FontWeight.Bold)
                .fontColor(Color.White)
                .maxLines(1)
                .textAlign(TextAlign.Center)
                .width('100%')
                .height(30)
            }
            .width(84)
            .height(72)
            .borderRadius(18)
            .backgroundColor('#C600D9')
            .justifyContent(FlexAlign.Center)
            .alignItems(HorizontalAlign.Center)
            .onClick(() => {
              this.chooseGoldenPoint()
            })

            Column() {
              Text('AD')
                .fontSize(20)
                .fontWeight(FontWeight.Bold)
                .fontColor(Color.White)
                .maxLines(1)
                .textAlign(TextAlign.Center)
                .width('100%')
                .height(30)
            }
            .width(84)
            .height(72)
            .borderRadius(18)
            .backgroundColor('#FF9300')
            .justifyContent(FlexAlign.Center)
            .alignItems(HorizontalAlign.Center)
            .margin({ left: 10 })
            .onClick(() => {
              this.chooseAdvantageRule()
            })
          }
          .width('100%')
          .height(78)
          .justifyContent(FlexAlign.Center)
          .alignItems(VerticalAlign.Center)
        }
        .width('100%')
        .height(120)
        .justifyContent(FlexAlign.Center)
        .alignItems(HorizontalAlign.Center)
      } else if (this.decidirModoSet) {
        Column() {
          Text('6 - 6')
            .fontSize(24)
            .fontWeight(FontWeight.Bold)
            .fontColor(Color.White)
            .maxLines(1)
            .textAlign(TextAlign.Center)
            .width('100%')
            .height(34)

          Row() {
            Column() {
              Text('Tie-break')
                .fontSize(16)
                .fontColor(Color.White)
                .maxLines(1)
                .textAlign(TextAlign.Center)
                .width('100%')
                .height(30)
            }
            .width(84)
            .height(72)
            .borderRadius(18)
            .backgroundColor('#C600D9')
            .justifyContent(FlexAlign.Center)
            .alignItems(HorizontalAlign.Center)
            .onClick(() => {
              this.chooseTieBreak()
            })

            Column() {
              Text('Dif. 2')
                .fontSize(16)
                .fontColor(Color.White)
                .maxLines(1)
                .textAlign(TextAlign.Center)
                .width('100%')
                .height(30)
            }
            .width(84)
            .height(72)
            .borderRadius(18)
            .backgroundColor('#FF9300')
            .justifyContent(FlexAlign.Center)
            .alignItems(HorizontalAlign.Center)
            .margin({ left: 10 })
            .onClick(() => {
              this.chooseDifferenceTwo()
            })
          }
          .width('100%')
          .height(78)
          .justifyContent(FlexAlign.Center)
          .alignItems(VerticalAlign.Center)
        }
        .width('100%')
        .height(120)
        .justifyContent(FlexAlign.Center)
        .alignItems(HorizontalAlign.Center)
      } else if (this.showMatchModeDecision) {
        Column() {
          Text('Sets 1 - 1')
            .fontSize(22)
            .fontWeight(FontWeight.Bold)
            .fontColor(Color.White)
            .maxLines(1)
            .textAlign(TextAlign.Center)
            .width('100%')
            .height(34)

          Row() {
            Column() {
              Text('3er Set')
                .fontSize(16)
                .fontColor(Color.White)
                .maxLines(1)
                .textAlign(TextAlign.Center)
                .width('100%')
                .height(30)
            }
            .width(84)
            .height(72)
            .borderRadius(18)
            .backgroundColor('#C600D9')
            .justifyContent(FlexAlign.Center)
            .alignItems(HorizontalAlign.Center)
            .onClick(() => {
              this.chooseThirdSet()
            })

            Column() {
              Text('Super TB')
                .fontSize(16)
                .fontColor(Color.White)
                .maxLines(1)
                .textAlign(TextAlign.Center)
                .width('100%')
                .height(30)
            }
            .width(84)
            .height(72)
            .borderRadius(18)
            .backgroundColor('#FF9300')
            .justifyContent(FlexAlign.Center)
            .alignItems(HorizontalAlign.Center)
            .margin({ left: 10 })
            .onClick(() => {
              this.chooseSuperTieBreak()
            })
          }
          .width('100%')
          .height(78)
          .justifyContent(FlexAlign.Center)
          .alignItems(VerticalAlign.Center)
        }
        .width('100%')
        .height(120)
        .justifyContent(FlexAlign.Center)
        .alignItems(HorizontalAlign.Center)
      } else {
        Row() {
          Column() {
            Text('Nosotros')
              .fontSize(12)
              .fontColor(Color.White)
              .maxLines(1)
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(20)

            Text(this.puntosNosotros)
              .fontSize(40)
              .fontWeight(FontWeight.Bold)
              .fontColor(Color.White)
              .maxLines(1)
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(54)
          }
          .width(80)
          .height(100)
          .padding({ left: 3, right: 3, top: 8, bottom: 5 })
          .borderRadius(18)
          .backgroundColor('#C600D9')
          .justifyContent(FlexAlign.Center)
          .alignItems(HorizontalAlign.Center)
          .onClick(() => {
            this.addPoint('nosotros')
          })

          Column() {
            Text('Rivales')
              .fontSize(12)
              .fontColor(Color.White)
              .maxLines(1)
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(20)

            Text(this.puntosRivales)
              .fontSize(40)
              .fontWeight(FontWeight.Bold)
              .fontColor(Color.White)
              .maxLines(1)
              .textAlign(TextAlign.Center)
              .width('100%')
              .height(54)
          }
          .width(80)
          .height(100)
          .padding({ left: 3, right: 3, top: 8, bottom: 5 })
          .borderRadius(18)
          .backgroundColor('#FF9300')
          .justifyContent(FlexAlign.Center)
          .alignItems(HorizontalAlign.Center)
          .margin({ left: 8 })
          .onClick(() => {
            this.addPoint('rivales')
          })
        }
        .width('100%')
        .height(108)
        .justifyContent(FlexAlign.Center)
        .alignItems(VerticalAlign.Center)
      }

      if (
        !this.showResetConfirm &&
        !this.decidirModoSet &&
        !this.showMatchModeDecision &&
        !this.decidirReglaDeuce
      ) {
        Row() {
          Button('Undo')
            .fontSize(10)
            .width(80)
            .height(20)
            .borderRadius(10)
            .backgroundColor('#3A3A3A')
            .enabled(this.hayDeshacer)
            .onClick(() => {
              this.undoPoint()
            })

          Button(this.partidoTerminado ? 'Nuevo' : 'Reset')
            .fontSize(10)
            .width(82)
            .height(24)
            .borderRadius(12)
            .backgroundColor('#3A3A3A')
            .margin({ left: 10 })
            .onClick(() => {
              if (this.partidoTerminado) {
                this.resetMatch()
              } else {
                this.requestReset()
              }
            })
        }
        .width('100%')
        .height(26)
        .justifyContent(FlexAlign.Center)
        .margin({ top: 2 })
      } else {
        Blank()
          .height(28)
      }
    }
    .width('100%')
    .height('100%')
    .padding({ left: 0, right: 0, top: 28, bottom: 30 })
    .backgroundColor('#000000')
  }
}
