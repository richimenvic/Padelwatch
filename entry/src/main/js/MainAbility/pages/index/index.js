export default {
  data: {
    screen: 'welcome',
    settingsReturnScreen: 'welcome',

    deuceRule: 'ask',
    deuceText: '40-40: Preguntar',
    deuceChoiceMade: false,
    deuceReturns: 0,
    vibrationEnabled: true,
    vibrationOnVisible: true,
    vibrationOffVisible: false,
    vibrationText: 'Vibración: ON',

    nameNosotros: 'NOSOTROS',
    nameRivales: 'RIVALES',

    serverFirst: '',
    server: '',

    setsNosotros: 0,
    setsRivales: 0,
    gamesNosotros: 0,
    gamesRivales: 0,
    pointIndexNosotros: 0,
    pointIndexRivales: 0,
    pointsNosotros: '0',
    pointsRivales: '0',

    setActual: 1,
    enTieBreak: false,
    tieBreakNosotros: 0,
    tieBreakRivales: 0,
    enSuperTieBreak: false,
    superTieNosotros: 0,
    superTieRivales: 0,
    jugarConDiferenciaDos: false,

    centerText: 'SET 1',
    winnerText: '',
    winnerIsNosotros: false,
    winnerIsRivales: false,
    finalNosotrosVisible: false,
    finalRivalesVisible: false,
    finalLine1: '',
    finalLine2: '',
    finalLine3: '',

    undoState: ''
  },

  startSetup: function () {
    this.resetState()
    this.screen = 'server'
  },

  openSettings: function () {
    this.settingsReturnScreen = this.screen
    this.screen = 'settings'
  },

  backToWelcome: function () {
    this.screen = this.settingsReturnScreen
  },

  cycleDeuceRule: function () {
    if (this.deuceRule === 'ask') {
      this.deuceRule = 'advantage'
      this.deuceText = '40-40: Ventaja'
      this.deuceChoiceMade = true
    } else if (this.deuceRule === 'advantage') {
      this.deuceRule = 'golden'
      this.deuceText = '40-40: Bola de oro'
      this.deuceChoiceMade = true
    } else if (this.deuceRule === 'golden') {
      this.deuceRule = 'star'
      this.deuceText = '40-40: Star Point'
      this.deuceChoiceMade = true
    } else {
      this.deuceRule = 'ask'
      this.deuceText = '40-40: Preguntar'
      this.deuceChoiceMade = false
    }
    this.deuceReturns = 0
    this.updateLabels()
  },

  toggleVibration: function () {
    this.vibrationEnabled = !this.vibrationEnabled
    this.vibrationOnVisible = this.vibrationEnabled
    this.vibrationOffVisible = !this.vibrationEnabled
    this.vibrationText = this.vibrationEnabled ? 'Vibración: ON' : 'Vibración: OFF'
  },

  startNosotros: function () {
    this.startMatch('nosotros')
  },

  startRivales: function () {
    this.startMatch('rivales')
  },

  startMatch: function (team) {
    this.resetState()
    this.serverFirst = team
    this.server = team
    this.screen = 'game'
    this.updateLabels()
  },

  resetState: function () {
    this.setsNosotros = 0
    this.setsRivales = 0
    this.gamesNosotros = 0
    this.gamesRivales = 0
    this.pointIndexNosotros = 0
    this.pointIndexRivales = 0
    this.setActual = 1
    this.enTieBreak = false
    this.tieBreakNosotros = 0
    this.tieBreakRivales = 0
    this.enSuperTieBreak = false
    this.superTieNosotros = 0
    this.superTieRivales = 0
    this.jugarConDiferenciaDos = false
    this.deuceChoiceMade = this.deuceRule !== 'ask'
    this.deuceReturns = 0
    this.undoState = ''
    this.winnerText = ''
    this.winnerIsNosotros = false
    this.winnerIsRivales = false
    this.finalNosotrosVisible = false
    this.finalRivalesVisible = false
    this.finalLine1 = 'Set 1: -'
    this.finalLine2 = 'Set 2: -'
    this.finalLine3 = 'Set 3: -'
    this.updateLabels()
  },

  pointNosotros: function () {
    this.addPoint('nosotros')
  },

  pointRivales: function () {
    this.addPoint('rivales')
  },

  addPoint: function (team) {
    if (this.screen !== 'game') {
      return
    }

    this.saveHistory()

    if (this.enSuperTieBreak) {
      this.addSuperTieBreakPoint(team)
      this.updateLabels()
      return
    }

    if (this.enTieBreak) {
      this.addTieBreakPoint(team)
      this.updateLabels()
      return
    }

    if (team === 'nosotros') {
      this.pointIndexNosotros++
    } else {
      this.pointIndexRivales++
    }

    this.resolvePoint()
    this.updateLabels()
  },

  resolvePoint: function () {
    var a = this.pointIndexNosotros
    var b = this.pointIndexRivales

    if (a >= 4 && b < 3) {
      this.winGame('nosotros')
      return
    }
    if (b >= 4 && a < 3) {
      this.winGame('rivales')
      return
    }

    if (a >= 3 && b >= 3) {
      if (a === b) {
        if (this.deuceRule === 'ask' && !this.deuceChoiceMade) {
          this.screen = 'deuce'
        } else if (this.deuceRule === 'star') {
          this.deuceReturns++
        }
        return
      }

      if (this.deuceChoiceMade && this.deuceRule === 'golden') {
        this.winGame(a > b ? 'nosotros' : 'rivales')
        return
      }

      if (this.deuceChoiceMade && this.deuceRule === 'star' && this.deuceReturns >= 2) {
        this.winGame(a > b ? 'nosotros' : 'rivales')
        return
      }

      if (a - b >= 2) {
        this.winGame('nosotros')
      } else if (b - a >= 2) {
        this.winGame('rivales')
      }
    }
  },

  chooseAdvantage: function () {
    this.deuceRule = 'advantage'
    this.deuceText = '40-40: Ventaja'
    this.deuceChoiceMade = true
    this.deuceReturns = 0
    this.screen = 'game'
    this.updateLabels()
  },

  chooseGolden: function () {
    this.deuceRule = 'golden'
    this.deuceText = '40-40: Bola de oro'
    this.deuceChoiceMade = true
    this.deuceReturns = 0
    this.screen = 'game'
    this.updateLabels()
  },

  chooseStar: function () {
    this.deuceRule = 'star'
    this.deuceText = '40-40: Star Point'
    this.deuceChoiceMade = true
    this.deuceReturns = 0
    this.screen = 'game'
    this.updateLabels()
  },

  winGame: function (team) {
    if (team === 'nosotros') {
      this.gamesNosotros++
    } else {
      this.gamesRivales++
    }

    this.pointIndexNosotros = 0
    this.pointIndexRivales = 0
    this.deuceChoiceMade = this.deuceRule !== 'ask'
    this.deuceReturns = 0

    if (this.gamesNosotros === 6 && this.gamesRivales === 6 && !this.jugarConDiferenciaDos) {
      this.switchServer()
      this.screen = 'setMode'
      return
    }

    this.checkSet()
    this.switchServer()
    this.checkMatch()
  },

  checkSet: function () {
    if (this.gamesNosotros >= 6 && this.gamesNosotros - this.gamesRivales >= 2) {
      this.winSet('nosotros')
    } else if (this.gamesRivales >= 6 && this.gamesRivales - this.gamesNosotros >= 2) {
      this.winSet('rivales')
    }
  },

  winSet: function (team) {
    this.saveSetResult()

    if (team === 'nosotros') {
      this.setsNosotros++
    } else {
      this.setsRivales++
    }

    this.enTieBreak = false
    this.tieBreakNosotros = 0
    this.tieBreakRivales = 0
    this.jugarConDiferenciaDos = false
    this.pointIndexNosotros = 0
    this.pointIndexRivales = 0
    this.deuceChoiceMade = this.deuceRule !== 'ask'
    this.deuceReturns = 0

    if (this.setsNosotros >= 2 || this.setsRivales >= 2) {
      this.checkMatch()
      return
    }

    if (this.setsNosotros === 1 && this.setsRivales === 1) {
      this.screen = 'matchMode'
      return
    }

    this.setActual++
    this.gamesNosotros = 0
    this.gamesRivales = 0
  },

  saveSetResult: function () {
    if (this.setActual === 1) {
      this.finalLine1 = 'Set 1: ' + this.gamesNosotros + '-' + this.gamesRivales
    } else if (this.setActual === 2) {
      this.finalLine2 = 'Set 2: ' + this.gamesNosotros + '-' + this.gamesRivales
    } else {
      this.finalLine3 = 'Set 3: ' + this.gamesNosotros + '-' + this.gamesRivales
    }
  },

  checkMatch: function () {
    if (this.setsNosotros >= 2) {
      this.finishMatch('NOSOTROS')
    } else if (this.setsRivales >= 2) {
      this.finishMatch('RIVALES')
    }
  },

  finishMatch: function (winner) {
    this.winnerText = winner + ' GANAN'
    this.winnerIsNosotros = winner === 'NOSOTROS'
    this.winnerIsRivales = winner === 'RIVALES'
    this.finalNosotrosVisible = this.winnerIsNosotros
    this.finalRivalesVisible = this.winnerIsRivales
    if (this.finalLine1 === '') {
      this.finalLine1 = 'Set 1: -'
    }
    if (this.finalLine2 === '') {
      this.finalLine2 = 'Set 2: -'
    }
    if (this.finalLine3 === '') {
      this.finalLine3 = 'Set 3: -'
    }
    this.screen = 'final'
  },

  switchServer: function () {
    this.server = this.server === 'nosotros' ? 'rivales' : 'nosotros'
  },

  chooseTieBreak: function () {
    this.enTieBreak = true
    this.jugarConDiferenciaDos = false
    this.tieBreakNosotros = 0
    this.tieBreakRivales = 0
    this.pointIndexNosotros = 0
    this.pointIndexRivales = 0
    this.screen = 'game'
    this.updateLabels()
  },

  chooseDifferenceTwo: function () {
    this.jugarConDiferenciaDos = true
    this.screen = 'game'
    this.updateLabels()
  },

  chooseThirdSet: function () {
    this.setActual = 3
    this.gamesNosotros = 0
    this.gamesRivales = 0
    this.pointIndexNosotros = 0
    this.pointIndexRivales = 0
    this.screen = 'game'
    this.updateLabels()
  },

  chooseSuperTieBreak: function () {
    this.enSuperTieBreak = true
    this.setActual = 3
    this.gamesNosotros = 0
    this.gamesRivales = 0
    this.superTieNosotros = 0
    this.superTieRivales = 0
    this.pointIndexNosotros = 0
    this.pointIndexRivales = 0
    this.screen = 'game'
    this.updateLabels()
  },

  addTieBreakPoint: function (team) {
    if (team === 'nosotros') {
      this.tieBreakNosotros++
    } else {
      this.tieBreakRivales++
    }

    if (this.tieBreakNosotros >= 7 && this.tieBreakNosotros - this.tieBreakRivales >= 2) {
      this.gamesNosotros = 7
      this.gamesRivales = 6
      this.winSet('nosotros')
    } else if (this.tieBreakRivales >= 7 && this.tieBreakRivales - this.tieBreakNosotros >= 2) {
      this.gamesNosotros = 6
      this.gamesRivales = 7
      this.winSet('rivales')
    }
  },

  addSuperTieBreakPoint: function (team) {
    if (team === 'nosotros') {
      this.superTieNosotros++
    } else {
      this.superTieRivales++
    }

    if (this.superTieNosotros >= 10 && this.superTieNosotros - this.superTieRivales >= 2) {
      this.finalLine3 = 'Super TB: ' + this.superTieNosotros + '-' + this.superTieRivales
      this.setsNosotros = 2
      this.setsRivales = 1
      this.enSuperTieBreak = false
      this.finishMatch('NOSOTROS')
    } else if (this.superTieRivales >= 10 && this.superTieRivales - this.superTieNosotros >= 2) {
      this.finalLine3 = 'Super TB: ' + this.superTieNosotros + '-' + this.superTieRivales
      this.setsNosotros = 1
      this.setsRivales = 2
      this.enSuperTieBreak = false
      this.finishMatch('RIVALES')
    }
  },

  saveHistory: function () {
    this.undoState = JSON.stringify({
      screen: this.screen,
      setsNosotros: this.setsNosotros,
      setsRivales: this.setsRivales,
      gamesNosotros: this.gamesNosotros,
      gamesRivales: this.gamesRivales,
      pointIndexNosotros: this.pointIndexNosotros,
      pointIndexRivales: this.pointIndexRivales,
      server: this.server,
      setActual: this.setActual,
      enTieBreak: this.enTieBreak,
      tieBreakNosotros: this.tieBreakNosotros,
      tieBreakRivales: this.tieBreakRivales,
      enSuperTieBreak: this.enSuperTieBreak,
      superTieNosotros: this.superTieNosotros,
      superTieRivales: this.superTieRivales,
      jugarConDiferenciaDos: this.jugarConDiferenciaDos,
      deuceRule: this.deuceRule,
      deuceText: this.deuceText,
      deuceChoiceMade: this.deuceChoiceMade,
      deuceReturns: this.deuceReturns,
      winnerText: this.winnerText,
      winnerIsNosotros: this.winnerIsNosotros,
      winnerIsRivales: this.winnerIsRivales,
      finalNosotrosVisible: this.finalNosotrosVisible,
      finalRivalesVisible: this.finalRivalesVisible,
      finalLine1: this.finalLine1,
      finalLine2: this.finalLine2,
      finalLine3: this.finalLine3
    })
  },

  undoPoint: function () {
    if (this.undoState === '') {
      if (this.screen === 'game' &&
          this.setsNosotros === 0 &&
          this.setsRivales === 0 &&
          this.gamesNosotros === 0 &&
          this.gamesRivales === 0 &&
          this.pointIndexNosotros === 0 &&
          this.pointIndexRivales === 0 &&
          !this.enTieBreak &&
          !this.enSuperTieBreak) {
        this.serverFirst = ''
        this.server = ''
        this.screen = 'server'
      }
      this.updateLabels()
      return
    }

    var activeDeuceRule = this.deuceRule
    var activeDeuceText = this.deuceText
    var last = JSON.parse(this.undoState)
    this.undoState = ''
    this.screen = last.screen === 'deuce' ? 'game' : last.screen
    this.setsNosotros = last.setsNosotros
    this.setsRivales = last.setsRivales
    this.gamesNosotros = last.gamesNosotros
    this.gamesRivales = last.gamesRivales
    this.pointIndexNosotros = last.pointIndexNosotros
    this.pointIndexRivales = last.pointIndexRivales
    this.server = last.server
    this.setActual = last.setActual
    this.enTieBreak = last.enTieBreak
    this.tieBreakNosotros = last.tieBreakNosotros
    this.tieBreakRivales = last.tieBreakRivales
    this.enSuperTieBreak = last.enSuperTieBreak
    this.superTieNosotros = last.superTieNosotros
    this.superTieRivales = last.superTieRivales
    this.jugarConDiferenciaDos = last.jugarConDiferenciaDos
    this.deuceRule = last.deuceRule
    this.deuceText = last.deuceText
    this.deuceChoiceMade = last.deuceChoiceMade
    this.deuceReturns = last.deuceReturns
    this.winnerText = last.winnerText
    this.winnerIsNosotros = last.winnerIsNosotros
    this.winnerIsRivales = last.winnerIsRivales
    this.finalNosotrosVisible = last.finalNosotrosVisible
    this.finalRivalesVisible = last.finalRivalesVisible
    this.finalLine1 = last.finalLine1
    this.finalLine2 = last.finalLine2
    this.finalLine3 = last.finalLine3

    if (activeDeuceRule !== 'ask' && last.deuceRule === 'ask') {
      this.deuceRule = activeDeuceRule
      this.deuceText = activeDeuceText
      this.deuceChoiceMade = true
    }

    this.updateLabels()
  },

  requestReset: function () {
    this.screen = 'resetConfirm'
  },

  cancelReset: function () {
    this.screen = 'game'
  },

  confirmReset: function () {
    this.resetMatch()
  },

  resetMatch: function () {
    this.resetState()
    this.screen = 'welcome'
  },

  noopSet: function () {
  },

  pointText: function (team) {
    if (this.enSuperTieBreak) {
      return team === 'nosotros' ? this.superTieNosotros.toString() : this.superTieRivales.toString()
    }
    if (this.enTieBreak) {
      return team === 'nosotros' ? this.tieBreakNosotros.toString() : this.tieBreakRivales.toString()
    }

    var own = team === 'nosotros' ? this.pointIndexNosotros : this.pointIndexRivales
    var other = team === 'nosotros' ? this.pointIndexRivales : this.pointIndexNosotros

    if (own >= 3 && other >= 3) {
      if (own === other) {
        return '40'
      }
      if (own > other) {
        return 'AD'
      }
      return '40'
    }

    if (own === 0) {
      return '0'
    }
    if (own === 1) {
      return '15'
    }
    if (own === 2) {
      return '30'
    }
    return '40'
  },

  updateLabels: function () {
    this.pointsNosotros = this.pointText('nosotros')
    this.pointsRivales = this.pointText('rivales')

    this.nameNosotros = this.server === 'nosotros' ? '> NOSOTROS' : 'NOSOTROS'
    this.nameRivales = this.server === 'rivales' ? '> RIVALES' : 'RIVALES'

    if (this.enSuperTieBreak) {
      this.centerText = 'SUPER TB'
    } else if (this.enTieBreak) {
      this.centerText = 'TIE-BREAK'
    } else if (this.pointIndexNosotros >= 3 && this.pointIndexRivales >= 3) {
      if (this.deuceRule === 'golden' && this.deuceChoiceMade) {
        this.centerText = 'BOLA ORO'
      } else if (this.deuceRule === 'star' && this.deuceChoiceMade) {
        this.centerText = this.deuceReturns >= 2 ? 'STAR POINT' : 'DEUCE ' + (this.deuceReturns + 1).toString() + '/2'
      } else if (this.pointIndexNosotros !== this.pointIndexRivales) {
        this.centerText = 'VENTAJA'
      } else {
        this.centerText = 'DEUCE'
      }
    } else if (this.jugarConDiferenciaDos) {
      this.centerText = 'DIF. 2'
    } else {
      this.centerText = 'SET ' + this.setActual
    }
  }
}
