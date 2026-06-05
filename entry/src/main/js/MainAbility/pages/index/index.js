import storage from '@system.storage'

export default {
  data: {
    screen: 'welcome',
    settingsReturnScreen: 'welcome',
    gameVisible: false,
    gameScreenVisible: false,
    resultVisible: false,

    deuceRule: 'ask',
    deuceText: '40-40: Preguntar',
    deuceChoiceMade: false,
    tieBreakRule: 'ask',
    tieBreakText: '6-6: Preguntar',
    vibrationEnabled: true,
    vibrationOnVisible: true,
    vibrationOffVisible: false,
    vibrationText: 'Vibración: ON',

    nameNosotros: 'NOSOTROS',
    nameRivales: 'RIVALES',
    topInfoLine: 'Sets 0 | Juegos 0',
    bottomInfoLine: 'Sets 0 | Juegos 0',
    serverBallNosotrosVisible: false,
    serverBallRivalesVisible: false,

    server: '',
    tieBreakFirstServer: '',

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

    setBox1Text: '0-0',
    setBox2Text: '-',
    setBox3Text: '-',
    setBox1TopText: '0',
    setBox1BottomText: '0',
    setBox2TopText: '-',
    setBox2BottomText: '-',
    setBox3TopText: '-',
    setBox3BottomText: '-',
    setGrid1NeutralVisible: true,
    setGrid1RivalesVisible: false,
    setGrid1NosotrosVisible: false,
    setGrid2NeutralVisible: true,
    setGrid2RivalesVisible: false,
    setGrid2NosotrosVisible: false,
    setGrid3NeutralVisible: true,
    setGrid3RivalesVisible: false,
    setGrid3NosotrosVisible: false,
    winnerText: '',
    resultWinner: '',
    resultSet1: '',
    resultSet2: '',
    resultSet3: '',
    resultSet1_6_0Visible: false,
    resultSet1_6_1Visible: false,
    resultSet1_6_2Visible: false,
    resultSet1_6_3Visible: false,
    resultSet1_6_4Visible: false,
    resultSet1_7_5Visible: false,
    resultSet1_7_6Visible: false,
    resultSet1_0_6Visible: false,
    resultSet1_1_6Visible: false,
    resultSet1_2_6Visible: false,
    resultSet1_3_6Visible: false,
    resultSet1_4_6Visible: false,
    resultSet1_5_7Visible: false,
    resultSet1_6_7Visible: false,
    resultSet2_6_0Visible: false,
    resultSet2_6_1Visible: false,
    resultSet2_6_2Visible: false,
    resultSet2_6_3Visible: false,
    resultSet2_6_4Visible: false,
    resultSet2_7_5Visible: false,
    resultSet2_7_6Visible: false,
    resultSet2_0_6Visible: false,
    resultSet2_1_6Visible: false,
    resultSet2_2_6Visible: false,
    resultSet2_3_6Visible: false,
    resultSet2_4_6Visible: false,
    resultSet2_5_7Visible: false,
    resultSet2_6_7Visible: false,
    resultSet3_6_0Visible: false,
    resultSet3_6_1Visible: false,
    resultSet3_6_2Visible: false,
    resultSet3_6_3Visible: false,
    resultSet3_6_4Visible: false,
    resultSet3_7_5Visible: false,
    resultSet3_7_6Visible: false,
    resultSet3_0_6Visible: false,
    resultSet3_1_6Visible: false,
    resultSet3_2_6Visible: false,
    resultSet3_3_6Visible: false,
    resultSet3_4_6Visible: false,
    resultSet3_5_7Visible: false,
    resultSet3_6_7Visible: false,
    finalScoreR006006Visible: false,
    matchSaved: false,
    lastSavedMatchId: '',
    pendingHistorySave: false,
    pendingHistoryWinner: '',
    finalVisible: false,
    finalWinnerNameText: '',
    finalNosotrosVisible: false,
    finalRivalesVisible: false,
    finalLine1: '',
    finalLine2: '',
    finalLine3: '',
    finalScoreLine1: '',
    finalScoreLine2: '',
    finalScoreLine3: '',
    finalMineSet1: '-',
    finalMineSet2: '-',
    finalMineSet3: '-',
    finalOppSet1: '-',
    finalOppSet2: '-',
    finalOppSet3: '-',

    undoHistoryText: '',
    undoCount: 0,
    deuceChoiceUndoText: '',
    matchChoiceUndoText: '',

    historyText: '[]',
    historyDemoLoaded: false,
    historyPage: 0,
    historyCardVisible: false,
    historyPrevVisible: false,
    historyNextVisible: false,
    historyEmptyVisible: true,
    history1Visible: false,
    history2Visible: false,
    history3Visible: false,
    history1RivalesVisible: false,
    history1NosotrosVisible: false,
    history2RivalesVisible: false,
    history2NosotrosVisible: false,
    history3RivalesVisible: false,
    history3NosotrosVisible: false,
    history1DeleteVisible: false,
    history2DeleteVisible: false,
    history3DeleteVisible: false,
    history1Text: '',
    history2Text: '',
    history3Text: '',
    history1ScoreText: '',
    history2ScoreText: '',
    history3ScoreText: '',
    historyResultDate: '',
    historyMineSet1: '-',
    historyMineSet2: '-',
    historyMineSet3: '-',
    historyOppSet1: '-',
    historyOppSet2: '-',
    historyOppSet3: '-'
  },

  onInit: function () {
    this.loadMatchHistory(true)
  },

  startSetup: function () {
    this.gameVisible = false
    this.screen = 'server'
    this.resetState()
    this.screen = 'server'
  },

  openHistory: function () {
    this.screen = 'history'
    this.historyPage = 0
    this.hideHistoryDeletes()
    this.loadMatchHistory(true)
  },

  closeHistory: function () {
    this.hideHistoryDeletes()
    this.screen = 'welcome'
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
    } else {
      this.deuceRule = 'ask'
      this.deuceText = '40-40: Preguntar'
      this.deuceChoiceMade = false
    }
    this.updateLabels()
  },

  cycleTieBreakRule: function () {
    if (this.tieBreakRule === 'ask') {
      this.tieBreakRule = 'normal'
      this.tieBreakText = '6-6: Tie-break normal'
    } else if (this.tieBreakRule === 'normal') {
      this.tieBreakRule = 'differenceTwo'
      this.tieBreakText = '6-6: Dif. 2'
    } else {
      this.tieBreakRule = 'ask'
      this.tieBreakText = '6-6: Preguntar'
    }
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
    this.server = team
    this.screen = 'game'
    this.resetState()
    this.server = team
    this.screen = 'game'
    this.gameVisible = true
    this.gameScreenVisible = true
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
    this.tieBreakFirstServer = ''
    this.enSuperTieBreak = false
    this.superTieNosotros = 0
    this.superTieRivales = 0
    this.jugarConDiferenciaDos = false
    this.deuceChoiceMade = this.deuceRule !== 'ask'
    this.undoHistoryText = ''
    this.undoCount = 0
    this.deuceChoiceUndoText = ''
    this.matchChoiceUndoText = ''
    this.winnerText = ''
    this.resultVisible = false
    this.resultWinner = ''
    this.resultSet1 = ''
    this.resultSet2 = ''
    this.resultSet3 = ''
    this.finalScoreR006006Visible = false
    this.clearResultSetFlags()
    this.matchSaved = false
    this.lastSavedMatchId = ''
    this.pendingHistorySave = false
    this.pendingHistoryWinner = ''
    this.gameVisible = false
    this.gameScreenVisible = false
    this.finalVisible = false
    this.finalWinnerNameText = ''
    this.finalNosotrosVisible = false
    this.finalRivalesVisible = false
    this.finalLine1 = 'Set 1: -'
    this.finalLine2 = 'Set 2: -'
    this.finalLine3 = 'Set 3: -'
    this.finalScoreLine1 = ''
    this.finalScoreLine2 = ''
    this.finalScoreLine3 = ''
    this.finalMineSet1 = '-'
    this.finalMineSet2 = '-'
    this.finalMineSet3 = '-'
    this.finalOppSet1 = '-'
    this.finalOppSet2 = '-'
    this.finalOppSet3 = '-'
    this.updateLabels()
  },

  pointNosotros: function () {
    this.addPoint('nosotros')
  },

  pointRivales: function () {
    this.addPoint('rivales')
  },

  addPoint: function (team) {
    if (this.screen === 'final') {
      return
    }
    if (this.screen !== 'game') {
      return
    }
    if (this.setsNosotros >= 2 || this.setsRivales >= 2) {
      this.checkMatch()
      return
    }

    this.deuceChoiceUndoText = ''
    this.saveHistory()

    if (this.enSuperTieBreak) {
      if (this.addSuperTieBreakPoint(team)) {
        return
      }
      if (this.screen === 'game' && this.shouldChangeEnds()) {
        this.screen = 'changeEnds'
      }
      this.updateLabels()
      return
    }

    if (this.enTieBreak) {
      if (this.addTieBreakPoint(team)) {
        return
      }
      if (this.screen === 'game' && this.shouldChangeEnds()) {
        this.screen = 'changeEnds'
      }
      this.updateLabels()
      return
    }

    if (team === 'nosotros') {
      this.pointIndexNosotros++
    } else {
      this.pointIndexRivales++
    }

    this.resolvePoint()
    if (this.finalVisible) {
      return
    }
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
        }
        return
      }

      if (this.deuceChoiceMade && this.deuceRule === 'golden') {
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
    if (this.screen === 'deuce') {
      this.deuceChoiceUndoText = this.lastUndoSnapshotText()
    }
    this.deuceRule = 'advantage'
    this.deuceText = '40-40: Ventaja'
    this.deuceChoiceMade = true
    this.screen = 'game'
    this.updateLabels()
  },

  chooseGolden: function () {
    if (this.screen === 'deuce') {
      this.deuceChoiceUndoText = this.lastUndoSnapshotText()
    }
    this.deuceRule = 'golden'
    this.deuceText = '40-40: Bola de oro'
    this.deuceChoiceMade = true
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

    if (this.gamesNosotros === 6 && this.gamesRivales === 6 && !this.jugarConDiferenciaDos) {
      this.switchServer()
      if (this.tieBreakRule === 'normal') {
        this.startTieBreak()
      } else if (this.tieBreakRule === 'differenceTwo') {
        this.jugarConDiferenciaDos = true
      } else {
        this.screen = 'setMode'
      }
      return
    }

    if (this.checkSet()) {
      return
    }
    this.switchServer()
    this.checkMatch()
  },

  checkSet: function () {
    if (this.gamesNosotros >= 6 && this.gamesNosotros - this.gamesRivales >= 2) {
      this.winSet('nosotros')
      return true
    } else if (this.gamesRivales >= 6 && this.gamesRivales - this.gamesNosotros >= 2) {
      this.winSet('rivales')
      return true
    }
    return false
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
    this.tieBreakFirstServer = ''
    this.jugarConDiferenciaDos = false
    this.pointIndexNosotros = 0
    this.pointIndexRivales = 0
    this.deuceChoiceMade = this.deuceRule !== 'ask'

    var matchFinished = this.setsNosotros >= 2 || this.setsRivales >= 2
    if (matchFinished) {
      var winnerName = team === 'nosotros' ? 'NOSOTROS' : 'RIVALES'
      this.gamesNosotros = 0
      this.gamesRivales = 0
      this.showResult(winnerName)
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
      return true
    } else if (this.setsRivales >= 2) {
      this.finishMatch('RIVALES')
      return true
    }
    return false
  },

  finishMatch: function (winner) {
    if (this.resultVisible) {
      return
    }
    this.showResult(winner)
  },

  finishMatchDirect: function (winner) {
    this.gamesNosotros = 0
    this.gamesRivales = 0
    this.showResult(winner)
  },

  showResult: function (winner) {
    this.winnerText = winner + ' GANAN'
    this.finalWinnerNameText = winner
    this.gameVisible = false
    this.gameScreenVisible = false
    this.screen = 'final'
    this.finalNosotrosVisible = winner === 'NOSOTROS'
    this.finalRivalesVisible = winner === 'RIVALES'
    if (this.finalLine1 === '') {
      this.finalLine1 = 'Set 1: -'
    }
    if (this.finalLine2 === '') {
      this.finalLine2 = 'Set 2: -'
    }
    if (this.finalLine3 === '') {
      this.finalLine3 = 'Set 3: -'
    }
    this.updateFinalResultGrid()
    this.finalScoreLine1 = this.finalResultLineText(this.finalLine1)
    this.finalScoreLine2 = this.finalResultLineText(this.finalLine2)
    this.finalScoreLine3 = this.finalResultLineText(this.finalLine3)
    this.resultWinner = winner
    this.resultSet1 = this.shortResultLineText(this.finalLine1)
    this.resultSet2 = this.shortResultLineText(this.finalLine2)
    this.resultSet3 = this.shortResultLineText(this.finalLine3)
    this.finalScoreR006006Visible = winner === 'RIVALES' &&
      this.finalLine1 === 'Set 1: 0-6' &&
      this.finalLine2 === 'Set 2: 0-6'
    this.updateResultSetFlags()
    this.finalVisible = true
    this.resultVisible = true
  },

  resultLineText: function (line) {
    if (!line || line.indexOf(': ') < 0) {
      return ''
    }
    var label = line.substring(0, line.indexOf(': '))
    var score = line.substring(line.indexOf(': ') + 2)
    if (score === '-' || score === '') {
      return ''
    }
    label = label.replace('Set ', 'SET ')
    return label + '   ' + score
  },

  shortResultLineText: function (line) {
    if (!line || line.indexOf(': ') < 0) {
      return ''
    }
    var label = line.substring(0, line.indexOf(': '))
    var score = line.substring(line.indexOf(': ') + 2)
    if (score === '-' || score === '') {
      return ''
    }
    label = label.replace('Set 1', 'S1')
    label = label.replace('Set 2', 'S2')
    label = label.replace('Set 3', 'S3')
    label = label.replace('Super TB', 'STB')
    return label + ' ' + score
  },

  updateResultSetFlags: function () {
    this.clearResultSetFlags()
    this.setResultSetFlag(1, this.finalLine1)
    this.setResultSetFlag(2, this.finalLine2)
    this.setResultSetFlag(3, this.finalLine3)
  },

  clearResultSetFlags: function () {
    this.resultSet1_6_0Visible = false
    this.resultSet1_6_1Visible = false
    this.resultSet1_6_2Visible = false
    this.resultSet1_6_3Visible = false
    this.resultSet1_6_4Visible = false
    this.resultSet1_7_5Visible = false
    this.resultSet1_7_6Visible = false
    this.resultSet1_0_6Visible = false
    this.resultSet1_1_6Visible = false
    this.resultSet1_2_6Visible = false
    this.resultSet1_3_6Visible = false
    this.resultSet1_4_6Visible = false
    this.resultSet1_5_7Visible = false
    this.resultSet1_6_7Visible = false
    this.resultSet2_6_0Visible = false
    this.resultSet2_6_1Visible = false
    this.resultSet2_6_2Visible = false
    this.resultSet2_6_3Visible = false
    this.resultSet2_6_4Visible = false
    this.resultSet2_7_5Visible = false
    this.resultSet2_7_6Visible = false
    this.resultSet2_0_6Visible = false
    this.resultSet2_1_6Visible = false
    this.resultSet2_2_6Visible = false
    this.resultSet2_3_6Visible = false
    this.resultSet2_4_6Visible = false
    this.resultSet2_5_7Visible = false
    this.resultSet2_6_7Visible = false
    this.resultSet3_6_0Visible = false
    this.resultSet3_6_1Visible = false
    this.resultSet3_6_2Visible = false
    this.resultSet3_6_3Visible = false
    this.resultSet3_6_4Visible = false
    this.resultSet3_7_5Visible = false
    this.resultSet3_7_6Visible = false
    this.resultSet3_0_6Visible = false
    this.resultSet3_1_6Visible = false
    this.resultSet3_2_6Visible = false
    this.resultSet3_3_6Visible = false
    this.resultSet3_4_6Visible = false
    this.resultSet3_5_7Visible = false
    this.resultSet3_6_7Visible = false
  },

  setResultSetFlag: function (setNo, line) {
    if (!line || line.indexOf(': ') < 0) {
      return
    }
    var score = line.substring(line.indexOf(': ') + 2)
    if (score === '-' || score === '') {
      return
    }
    if (setNo === 1) {
      if (score === '6-0') { this.resultSet1_6_0Visible = true }
      if (score === '6-1') { this.resultSet1_6_1Visible = true }
      if (score === '6-2') { this.resultSet1_6_2Visible = true }
      if (score === '6-3') { this.resultSet1_6_3Visible = true }
      if (score === '6-4') { this.resultSet1_6_4Visible = true }
      if (score === '7-5') { this.resultSet1_7_5Visible = true }
      if (score === '7-6') { this.resultSet1_7_6Visible = true }
      if (score === '0-6') { this.resultSet1_0_6Visible = true }
      if (score === '1-6') { this.resultSet1_1_6Visible = true }
      if (score === '2-6') { this.resultSet1_2_6Visible = true }
      if (score === '3-6') { this.resultSet1_3_6Visible = true }
      if (score === '4-6') { this.resultSet1_4_6Visible = true }
      if (score === '5-7') { this.resultSet1_5_7Visible = true }
      if (score === '6-7') { this.resultSet1_6_7Visible = true }
    } else if (setNo === 2) {
      if (score === '6-0') { this.resultSet2_6_0Visible = true }
      if (score === '6-1') { this.resultSet2_6_1Visible = true }
      if (score === '6-2') { this.resultSet2_6_2Visible = true }
      if (score === '6-3') { this.resultSet2_6_3Visible = true }
      if (score === '6-4') { this.resultSet2_6_4Visible = true }
      if (score === '7-5') { this.resultSet2_7_5Visible = true }
      if (score === '7-6') { this.resultSet2_7_6Visible = true }
      if (score === '0-6') { this.resultSet2_0_6Visible = true }
      if (score === '1-6') { this.resultSet2_1_6Visible = true }
      if (score === '2-6') { this.resultSet2_2_6Visible = true }
      if (score === '3-6') { this.resultSet2_3_6Visible = true }
      if (score === '4-6') { this.resultSet2_4_6Visible = true }
      if (score === '5-7') { this.resultSet2_5_7Visible = true }
      if (score === '6-7') { this.resultSet2_6_7Visible = true }
    } else {
      if (score === '6-0') { this.resultSet3_6_0Visible = true }
      if (score === '6-1') { this.resultSet3_6_1Visible = true }
      if (score === '6-2') { this.resultSet3_6_2Visible = true }
      if (score === '6-3') { this.resultSet3_6_3Visible = true }
      if (score === '6-4') { this.resultSet3_6_4Visible = true }
      if (score === '7-5') { this.resultSet3_7_5Visible = true }
      if (score === '7-6') { this.resultSet3_7_6Visible = true }
      if (score === '0-6') { this.resultSet3_0_6Visible = true }
      if (score === '1-6') { this.resultSet3_1_6Visible = true }
      if (score === '2-6') { this.resultSet3_2_6Visible = true }
      if (score === '3-6') { this.resultSet3_3_6Visible = true }
      if (score === '4-6') { this.resultSet3_4_6Visible = true }
      if (score === '5-7') { this.resultSet3_5_7Visible = true }
      if (score === '6-7') { this.resultSet3_6_7Visible = true }
    }
  },

  prepareFinishedMatchResult: function (winner) {
    if (this.finalLine1 === '') {
      this.finalLine1 = 'Set 1: -'
    }
    if (this.finalLine2 === '') {
      this.finalLine2 = 'Set 2: -'
    }
    if (this.finalLine3 === '') {
      this.finalLine3 = 'Set 3: -'
    }
    this.finalScoreLine1 = this.finalResultLineText(this.finalLine1)
    this.finalScoreLine2 = this.finalResultLineText(this.finalLine2)
    this.finalScoreLine3 = this.finalResultLineText(this.finalLine3)
  },

  finalResultLineText: function (line) {
    if (!line || line.indexOf(': ') < 0) {
      return ''
    }

    var label = line.substring(0, line.indexOf(': '))
    var score = line.substring(line.indexOf(': ') + 2)
    if (score === '-' || score === '') {
      return ''
    }
    score = score.replace('-', ' - ')
    return label + ': ' + score
  },

  compactFinalScoreText: function () {
    var result = this.shortFinalScoreText(this.finalLine1)
    var line2 = this.shortFinalScoreText(this.finalLine2)
    var line3 = this.shortFinalScoreText(this.finalLine3)
    if (line2 !== '') {
      result = result + '  ' + line2
    }
    if (line3 !== '') {
      result = result + '  ' + line3
    }
    return result
  },

  shortFinalScoreText: function (line) {
    if (!line || line.indexOf(': ') < 0) {
      return ''
    }
    var label = line.substring(0, line.indexOf(': '))
    var score = line.substring(line.indexOf(': ') + 2)
    if (score === '-' || score === '') {
      return ''
    }
    label = label.replace('Set ', 'S')
    label = label.replace('Super TB', 'STB')
    return label + ' ' + score
  },

  queueFinishedMatchSave: function (winner) {
    this.pendingHistorySave = true
    this.pendingHistoryWinner = winner
  },

  flushPendingFinishedMatchSave: function () {
    if (!this.pendingHistorySave) {
      return
    }

    var winner = this.pendingHistoryWinner
    this.pendingHistorySave = false
    this.pendingHistoryWinner = ''
    this.saveFinishedMatch(winner)
  },

  saveFinishedMatch: function (winner) {
    if (this.matchSaved) {
      return
    }
    this.matchSaved = true

    var history = this.parseHistory()
    var item = {
      id: new Date().getTime().toString(),
      date: this.todayText(),
      time: this.timeText(),
      winner: winner,
      line1: this.finalLine1,
      line2: this.finalLine2,
      line3: this.finalLine3
    }
    this.lastSavedMatchId = item.id
    history.unshift(item)
    if (history.length > 10) {
      history = history.slice(0, 10)
    }
    this.storeHistory(history, true)
  },

  todayText: function () {
    var now = new Date()
    var year = now.getFullYear().toString()
    var month = (now.getMonth() + 1).toString()
    var day = now.getDate().toString()
    if (month.length < 2) {
      month = '0' + month
    }
    if (day.length < 2) {
      day = '0' + day
    }
    return year + '-' + month + '-' + day
  },

  timeText: function () {
    var now = new Date()
    var hour = now.getHours().toString()
    var minute = now.getMinutes().toString()
    if (hour.length < 2) {
      hour = '0' + hour
    }
    if (minute.length < 2) {
      minute = '0' + minute
    }
    return hour + ':' + minute
  },

  switchServer: function () {
    this.server = this.server === 'nosotros' ? 'rivales' : 'nosotros'
  },

  startTieBreak: function () {
    this.enTieBreak = true
    this.jugarConDiferenciaDos = false
    this.tieBreakNosotros = 0
    this.tieBreakRivales = 0
    this.tieBreakFirstServer = this.server
    this.pointIndexNosotros = 0
    this.pointIndexRivales = 0
    this.screen = 'game'
    this.updateLabels()
  },

  chooseTieBreak: function () {
    this.startTieBreak()
  },

  chooseDifferenceTwo: function () {
    this.jugarConDiferenciaDos = true
    this.screen = 'game'
    this.updateLabels()
  },

  chooseThirdSet: function () {
    if (this.screen === 'matchMode') {
      this.matchChoiceUndoText = this.currentSnapshotText()
    }
    this.setActual = 3
    this.gamesNosotros = 0
    this.gamesRivales = 0
    this.pointIndexNosotros = 0
    this.pointIndexRivales = 0
    this.screen = 'game'
    this.updateLabels()
  },

  chooseSuperTieBreak: function () {
    if (this.screen === 'matchMode') {
      this.matchChoiceUndoText = this.currentSnapshotText()
    }
    this.enSuperTieBreak = true
    this.setActual = 3
    this.gamesNosotros = 0
    this.gamesRivales = 0
    this.superTieNosotros = 0
    this.superTieRivales = 0
    this.tieBreakFirstServer = this.server
    this.pointIndexNosotros = 0
    this.pointIndexRivales = 0
    this.screen = 'game'
    this.updateLabels()
  },

  continueAfterChangeEnds: function () {
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
      this.server = this.otherTeam(this.tieBreakFirstServer)
      this.winSet('nosotros')
      return true
    } else if (this.tieBreakRivales >= 7 && this.tieBreakRivales - this.tieBreakNosotros >= 2) {
      this.gamesNosotros = 6
      this.gamesRivales = 7
      this.server = this.otherTeam(this.tieBreakFirstServer)
      this.winSet('rivales')
      return true
    }
    return false
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
      this.tieBreakFirstServer = ''
      this.finishMatchDirect('NOSOTROS')
      return true
    } else if (this.superTieRivales >= 10 && this.superTieRivales - this.superTieNosotros >= 2) {
      this.finalLine3 = 'Super TB: ' + this.superTieNosotros + '-' + this.superTieRivales
      this.setsNosotros = 1
      this.setsRivales = 2
      this.enSuperTieBreak = false
      this.tieBreakFirstServer = ''
      this.finishMatchDirect('RIVALES')
      return true
    }
    return false
  },

  otherTeam: function (team) {
    return team === 'nosotros' ? 'rivales' : 'nosotros'
  },

  activeTieBreakServer: function () {
    var firstServer = this.tieBreakFirstServer === '' ? this.server : this.tieBreakFirstServer
    var totalPoints = this.enSuperTieBreak
      ? this.superTieNosotros + this.superTieRivales
      : this.tieBreakNosotros + this.tieBreakRivales
    var serverBlock = totalPoints === 0 ? 0 : Math.floor((totalPoints + 1) / 2)
    return serverBlock % 2 === 0 ? firstServer : this.otherTeam(firstServer)
  },

  shouldChangeEnds: function () {
    if (!this.enTieBreak && !this.enSuperTieBreak) {
      return false
    }
    var totalPoints = this.enSuperTieBreak
      ? this.superTieNosotros + this.superTieRivales
      : this.tieBreakNosotros + this.tieBreakRivales
    return totalPoints > 0 && totalPoints % 6 === 0
  },

  saveHistory: function () {
    var snapshot = JSON.stringify({
      screen: this.screen,
      setsNosotros: this.setsNosotros,
      setsRivales: this.setsRivales,
      gamesNosotros: this.gamesNosotros,
      gamesRivales: this.gamesRivales,
      pointIndexNosotros: this.pointIndexNosotros,
      pointIndexRivales: this.pointIndexRivales,
      server: this.server,
      tieBreakFirstServer: this.tieBreakFirstServer,
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
      winnerText: this.winnerText,
      matchSaved: this.matchSaved,
      lastSavedMatchId: this.lastSavedMatchId,
      finalNosotrosVisible: this.finalNosotrosVisible,
      finalRivalesVisible: this.finalRivalesVisible,
      finalLine1: this.finalLine1,
      finalLine2: this.finalLine2,
      finalLine3: this.finalLine3,
      finalMineSet1: this.finalMineSet1,
      finalMineSet2: this.finalMineSet2,
      finalMineSet3: this.finalMineSet3,
      finalOppSet1: this.finalOppSet1,
      finalOppSet2: this.finalOppSet2,
      finalOppSet3: this.finalOppSet3
    })

    this.undoHistoryText = this.undoHistoryText + snapshot + '\n'
    this.undoCount++

    if (this.undoCount > 20) {
      var firstSep = this.undoHistoryText.indexOf('\n')
      if (firstSep >= 0) {
        this.undoHistoryText = this.undoHistoryText.substring(firstSep + 1)
      }
      this.undoCount = 20
    }
  },

  currentSnapshotText: function () {
    return JSON.stringify({
      screen: this.screen,
      setsNosotros: this.setsNosotros,
      setsRivales: this.setsRivales,
      gamesNosotros: this.gamesNosotros,
      gamesRivales: this.gamesRivales,
      pointIndexNosotros: this.pointIndexNosotros,
      pointIndexRivales: this.pointIndexRivales,
      server: this.server,
      tieBreakFirstServer: this.tieBreakFirstServer,
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
      winnerText: this.winnerText,
      matchSaved: this.matchSaved,
      lastSavedMatchId: this.lastSavedMatchId,
      finalNosotrosVisible: this.finalNosotrosVisible,
      finalRivalesVisible: this.finalRivalesVisible,
      finalLine1: this.finalLine1,
      finalLine2: this.finalLine2,
      finalLine3: this.finalLine3,
      finalMineSet1: this.finalMineSet1,
      finalMineSet2: this.finalMineSet2,
      finalMineSet3: this.finalMineSet3,
      finalOppSet1: this.finalOppSet1,
      finalOppSet2: this.finalOppSet2,
      finalOppSet3: this.finalOppSet3
    })
  },

  lastUndoSnapshotText: function () {
    if (this.undoHistoryText === '') {
      return ''
    }
    var text = this.undoHistoryText
    var trimmed = text.substring(0, text.length - 1)
    var lastSep = trimmed.lastIndexOf('\n')
    return lastSep >= 0 ? trimmed.substring(lastSep + 1) : trimmed
  },

  popUndoSnapshotText: function () {
    var lastText = this.lastUndoSnapshotText()
    if (lastText === '') {
      return ''
    }
    var trimmed = this.undoHistoryText.substring(0, this.undoHistoryText.length - 1)
    var lastSep = trimmed.lastIndexOf('\n')
    if (lastSep >= 0) {
      this.undoHistoryText = trimmed.substring(0, lastSep + 1)
    } else {
      this.undoHistoryText = ''
    }
    this.undoCount--
    return lastText
  },

  restoreSnapshot: function (snapshotText) {
    var last = JSON.parse(snapshotText)
    this.screen = last.screen === 'deuce' ? 'game' : last.screen
    this.setsNosotros = last.setsNosotros
    this.setsRivales = last.setsRivales
    this.gamesNosotros = last.gamesNosotros
    this.gamesRivales = last.gamesRivales
    this.pointIndexNosotros = last.pointIndexNosotros
    this.pointIndexRivales = last.pointIndexRivales
    this.server = last.server
    this.tieBreakFirstServer = last.tieBreakFirstServer || ''
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
    this.winnerText = last.winnerText
    this.matchSaved = last.matchSaved || false
    this.lastSavedMatchId = last.lastSavedMatchId || ''
    this.finalNosotrosVisible = last.finalNosotrosVisible
    this.finalRivalesVisible = last.finalRivalesVisible
    this.finalLine1 = last.finalLine1
    this.finalLine2 = last.finalLine2
    this.finalLine3 = last.finalLine3
    this.finalMineSet1 = last.finalMineSet1 || '-'
    this.finalMineSet2 = last.finalMineSet2 || '-'
    this.finalMineSet3 = last.finalMineSet3 || '-'
    this.finalOppSet1 = last.finalOppSet1 || '-'
    this.finalOppSet2 = last.finalOppSet2 || '-'
    this.finalOppSet3 = last.finalOppSet3 || '-'

    if (this.enSuperTieBreak) {
      this.setsNosotros = 1
      this.setsRivales = 1
      this.gamesNosotros = 0
      this.gamesRivales = 0
      this.pointIndexNosotros = 0
      this.pointIndexRivales = 0
      this.finalLine3 = 'Set 3: -'
    }

    this.resultVisible = this.screen === 'final'
    this.finalVisible = this.screen === 'final'
    this.gameVisible = this.screen === 'game'
    this.gameScreenVisible = this.screen === 'game'
  },

  undoPoint: function () {
    if (this.matchChoiceUndoText !== '' &&
        this.screen === 'game' &&
        this.setActual === 3 &&
        this.gamesNosotros === 0 &&
        this.gamesRivales === 0 &&
        this.pointIndexNosotros === 0 &&
        this.pointIndexRivales === 0 &&
        ((!this.enSuperTieBreak && !this.enTieBreak) ||
          (this.enSuperTieBreak && this.superTieNosotros === 0 && this.superTieRivales === 0))) {
      this.restoreSnapshot(this.matchChoiceUndoText)
      this.matchChoiceUndoText = ''
      this.updateLabels()
      return
    }

    if (this.deuceChoiceUndoText !== '' &&
        this.screen === 'game' &&
        this.pointIndexNosotros === 3 &&
        this.pointIndexRivales === 3) {
      var deuceUndoText = this.popUndoSnapshotText()
      if (deuceUndoText !== '') {
        this.restoreSnapshot(deuceUndoText)
      }
      this.deuceChoiceUndoText = ''
      this.updateLabels()
      return
    }

    if (this.undoCount === 0 || this.undoHistoryText === '') {
      if (this.screen === 'final' && this.matchSaved) {
        this.deleteHistoryById(this.lastSavedMatchId)
        this.resetMatch()
        return
      }
      if (this.screen === 'game' &&
          this.setsNosotros === 0 &&
          this.setsRivales === 0 &&
          this.gamesNosotros === 0 &&
          this.gamesRivales === 0 &&
          this.pointIndexNosotros === 0 &&
          this.pointIndexRivales === 0 &&
          !this.enTieBreak &&
          !this.enSuperTieBreak) {
        this.server = ''
        this.screen = 'server'
      }
      this.updateLabels()
      return
    }

    var savedMatchIdToRemove = this.screen === 'final' && this.matchSaved ? this.lastSavedMatchId : ''
    var lastText = this.popUndoSnapshotText()
    this.restoreSnapshot(lastText)

    if (savedMatchIdToRemove !== '') {
      this.deleteHistoryById(savedMatchIdToRemove)
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

  parseHistory: function () {
    try {
      var history = JSON.parse(this.historyText)
      if (Object.prototype.toString.call(history) !== '[object Array]') {
        return []
      }
      return this.validHistory(history)
    } catch (e) {
      return []
    }
  },

  validHistory: function (history) {
    var valid = []
    for (var i = 0; i < history.length; i++) {
      var item = history[i]
      if (item &&
          item.date &&
          item.winner &&
          item.line1 &&
          item.line2 &&
          item.line3) {
        valid.push(item)
      }
    }
    return valid
  },

  storageValue: function (data) {
    if (typeof data === 'string') {
      return data
    }
    if (data && typeof data.data === 'string') {
      return data.data
    }
    if (data && typeof data.value === 'string') {
      return data.value
    }
    return '[]'
  },

  loadMatchHistory: function (useDemoFallback) {
    var self = this
    try {
      storage.get({
        key: 'matchHistory',
        default: '[]',
        success: function (data) {
          self.historyText = self.storageValue(data)
          if (useDemoFallback && self.parseHistory().length === 0 && !self.historyDemoLoaded) {
            self.loadDemoHistory()
            return
          }
          self.updateHistoryLabels()
        },
        fail: function () {
          if (useDemoFallback && self.parseHistory().length === 0 && !self.historyDemoLoaded) {
            self.loadDemoHistory()
            return
          }
          self.updateHistoryLabels()
        }
      })
    } catch (e) {
      if (useDemoFallback && self.parseHistory().length === 0 && !self.historyDemoLoaded) {
        self.loadDemoHistory()
        return
      }
      self.updateHistoryLabels()
    }
  },

  storeHistory: function (history, skipLabelUpdate) {
    this.historyText = JSON.stringify(history)
    if (!skipLabelUpdate) {
      this.updateHistoryLabels()
    }
    try {
      storage.set({
        key: 'matchHistory',
        value: this.historyText
      })
    } catch (e) {
    }
  },

  historyLine: function (item) {
    var winner = item.winner === 'NOSOTROS' ? 'NOS' : 'RIV'
    return this.shortDate(item.date) + ' ' + this.shortTime(item.time) + ' ' + winner
  },

  shortDate: function (date) {
    if (!date || date.length < 10) {
      return '--/--'
    }
    return date.substring(8, 10) + '/' + date.substring(5, 7)
  },

  shortTime: function (time) {
    if (!time) {
      return '--:--'
    }
    return time
  },

  historyScoreLine: function (item) {
    var set1 = this.cleanHistorySet(item.line1, 'Set 1: ')
    var set2 = this.cleanHistorySet(item.line2, 'Set 2: ')
    var set3 = this.cleanHistorySet(item.line3, 'Set 3: ')
    set3 = set3.replace('Super TB: ', 'ST ')
    var score = set1 + ' ' + set2
    if (set3 !== '' && set3 !== '-') {
      score = score + ' ' + set3
    }
    if (score === ' ') {
      return ''
    }
    return score
  },

  cleanHistorySet: function (value, prefix) {
    if (value === undefined || value === null) {
      return ''
    }
    return value.toString().replace(prefix, '')
  },

  finalSetParts: function (value) {
    var clean = value === undefined || value === null ? '-' : value.toString()
    clean = clean.replace('Set 1: ', '')
    clean = clean.replace('Set 2: ', '')
    clean = clean.replace('Set 3: ', '')
    clean = clean.replace('Super TB: ', '')
    var dash = clean.indexOf('-')
    if (clean === '-' || dash < 0) {
      return ['-', '-']
    }
    return [clean.substring(0, dash), clean.substring(dash + 1)]
  },

  updateFinalResultGrid: function () {
    var set1 = this.finalSetParts(this.finalLine1)
    var set2 = this.finalSetParts(this.finalLine2)
    var set3 = this.finalSetParts(this.finalLine3)
    this.finalMineSet1 = set1[0]
    this.finalOppSet1 = set1[1]
    this.finalMineSet2 = set2[0]
    this.finalOppSet2 = set2[1]
    this.finalMineSet3 = set3[0]
    this.finalOppSet3 = set3[1]
  },

  historySetParts: function (value) {
    var clean = value === undefined || value === null ? '-' : value.toString()
    clean = clean.replace('Set 1: ', '')
    clean = clean.replace('Set 2: ', '')
    clean = clean.replace('Set 3: ', '')
    clean = clean.replace('Super TB: ', '')
    var dash = clean.indexOf('-')
    if (clean === '-' || dash < 0) {
      return ['-', '-']
    }
    return [clean.substring(0, dash), clean.substring(dash + 1)]
  },

  applyHistoryResultCard: function (item) {
    if (!item) {
      this.historyCardVisible = false
      this.historyResultDate = ''
      this.historyMineSet1 = '-'
      this.historyMineSet2 = '-'
      this.historyMineSet3 = '-'
      this.historyOppSet1 = '-'
      this.historyOppSet2 = '-'
      this.historyOppSet3 = '-'
      return
    }

    var set1 = this.historySetParts(item.line1)
    var set2 = this.historySetParts(item.line2)
    var set3 = this.historySetParts(item.line3)
    this.historyCardVisible = true
    this.historyResultDate = item.date || ''
    this.historyMineSet1 = set1[0]
    this.historyOppSet1 = set1[1]
    this.historyMineSet2 = set2[0]
    this.historyOppSet2 = set2[1]
    this.historyMineSet3 = set3[0]
    this.historyOppSet3 = set3[1]
  },

  updateHistoryLabels: function () {
    var history = this.parseHistory()
    if (history.length.toString() !== this.parseHistoryRawLength().toString()) {
      this.storeHistory(history)
      return
    }
    var maxPage = history.length > 0 ? history.length - 1 : 0
    if (this.historyPage > maxPage) {
      this.historyPage = maxPage
    }
    if (this.historyPage < 0) {
      this.historyPage = 0
    }

    var offset = this.historyPage
    this.historyEmptyVisible = history.length === 0
    this.historyPrevVisible = this.historyPage > 0
    this.historyNextVisible = offset + 1 < history.length

    this.history1Visible = history.length > offset
    this.history2Visible = false
    this.history3Visible = false

    this.history1Text = this.history1Visible ? this.historyLine(history[offset]) : ''
    this.history2Text = ''
    this.history3Text = ''
    this.history1ScoreText = this.history1Visible ? this.historyScoreLine(history[offset]) : ''
    this.history2ScoreText = ''
    this.history3ScoreText = ''
    this.applyHistoryResultCard(this.history1Visible ? history[offset] : null)

    this.history1RivalesVisible = this.history1Visible && history[offset].winner === 'RIVALES'
    this.history1NosotrosVisible = this.history1Visible && history[offset].winner === 'NOSOTROS'
    this.history2RivalesVisible = false
    this.history2NosotrosVisible = false
    this.history3RivalesVisible = false
    this.history3NosotrosVisible = false
    this.history1DeleteVisible = this.history1Visible && this.history1DeleteVisible
    this.history2DeleteVisible = this.history2Visible && this.history2DeleteVisible
    this.history3DeleteVisible = this.history3Visible && this.history3DeleteVisible
  },

  parseHistoryRawLength: function () {
    try {
      var history = JSON.parse(this.historyText)
      return Object.prototype.toString.call(history) === '[object Array]' ? history.length : 0
    } catch (e) {
      return 0
    }
  },

  deleteHistoryAt: function (index) {
    var history = this.parseHistory()
    var realIndex = this.historyPage + index
    if (realIndex < 0 || realIndex >= history.length) {
      return
    }
    history.splice(realIndex, 1)
    this.hideHistoryDeletes()
    this.storeHistory(history)
  },

  deleteHistoryById: function (id) {
    var history = this.parseHistory()
    for (var i = 0; i < history.length; i++) {
      if (history[i].id === id) {
        history.splice(i, 1)
        this.storeHistory(history)
        return
      }
    }
  },

  hideHistoryDeletes: function () {
    this.history1DeleteVisible = false
    this.history2DeleteVisible = false
    this.history3DeleteVisible = false
  },

  showHistoryDelete: function (index) {
    this.hideHistoryDeletes()
    if (index === 0) {
      this.history1DeleteVisible = true
    } else if (index === 1) {
      this.history2DeleteVisible = true
    } else if (index === 2) {
      this.history3DeleteVisible = true
    }
  },

  historyPrevPage: function () {
    if (this.historyPage > 0) {
      this.historyPage--
      this.hideHistoryDeletes()
      this.updateHistoryLabels()
    }
  },

  historyNextPage: function () {
    var history = this.parseHistory()
    if (this.historyPage + 1 < history.length) {
      this.historyPage++
      this.hideHistoryDeletes()
      this.updateHistoryLabels()
    }
  },

  demoHistoryItems: function () {
    var demo = []
    var scores = [
      ['NOSOTROS', '6-4', '6-3', '-'],
      ['RIVALES', '4-6', '3-6', '-'],
      ['NOSOTROS', '6-0', '0-6', 'ST 11-9'],
      ['RIVALES', '0-6', '6-0', 'ST 10-12'],
      ['NOSOTROS', '7-6', '6-4', '-'],
      ['RIVALES', '6-7', '4-6', '-'],
      ['NOSOTROS', '6-2', '5-7', '6-3'],
      ['RIVALES', '2-6', '7-5', '3-6'],
      ['NOSOTROS', '6-1', '6-1', '-'],
      ['RIVALES', '1-6', '1-6', '-']
    ]
    for (var i = 0; i < scores.length; i++) {
      var row = scores[i]
      var third = row[3].indexOf('ST ') === 0 ? 'Super TB: ' + row[3].replace('ST ', '') : 'Set 3: ' + row[3]
      demo.push({
        id: 'demo-' + i.toString(),
        date: '2026-06-' + (i < 9 ? '0' + (i + 1).toString() : '10'),
        time: (10 + i).toString() + ':0' + (i % 6).toString(),
        winner: row[0],
        line1: 'Set 1: ' + row[1],
        line2: 'Set 2: ' + row[2],
        line3: third
      })
    }
    return demo
  },

  loadDemoHistory: function () {
    this.historyDemoLoaded = true
    this.historyText = JSON.stringify(this.demoHistoryItems())
    this.updateHistoryLabels()
  },

  handleHistorySwipe: function (event, index) {
    if (event.direction === 'left') {
      this.showHistoryDelete(index)
    } else if (event.direction === 'right') {
      this.hideHistoryDeletes()
    }
  },

  historySwipe1: function (event) {
    this.handleHistorySwipe(event, 0)
  },

  historySwipe2: function (event) {
    this.handleHistorySwipe(event, 1)
  },

  historySwipe3: function (event) {
    this.handleHistorySwipe(event, 2)
  },

  deleteHistory1: function () {
    this.deleteHistoryAt(0)
  },

  deleteHistory2: function () {
    this.deleteHistoryAt(1)
  },

  deleteHistory3: function () {
    this.deleteHistoryAt(2)
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

  setBoxState: function (box, state) {
    if (box === 1) {
      this.setGrid1NeutralVisible = state === 'neutral'
      this.setGrid1RivalesVisible = state === 'rivales'
      this.setGrid1NosotrosVisible = state === 'nosotros'
    } else if (box === 2) {
      this.setGrid2NeutralVisible = state === 'neutral'
      this.setGrid2RivalesVisible = state === 'rivales'
      this.setGrid2NosotrosVisible = state === 'nosotros'
    } else {
      this.setGrid3NeutralVisible = state === 'neutral'
      this.setGrid3RivalesVisible = state === 'rivales'
      this.setGrid3NosotrosVisible = state === 'nosotros'
    }
  },

  setBoxText: function (box, text) {
    if (box === 1) {
      this.setBox1Text = text
    } else if (box === 2) {
      this.setBox2Text = text
    } else {
      this.setBox3Text = text
    }
  },

  setFinishedBox: function (box, line) {
    if (line.indexOf('Super TB: ') === 0) {
      return false
    }

    var sep = line.indexOf(': ')
    if (sep < 0) {
      return false
    }

    var scoreText = line.substring(sep + 2)
    var dash = scoreText.indexOf('-')
    if (scoreText === '-' || dash < 0) {
      return false
    }

    var nosotros = parseInt(scoreText.substring(0, dash), 10)
    var rivales = parseInt(scoreText.substring(dash + 1), 10)
    if (isNaN(nosotros) || isNaN(rivales)) {
      return false
    }

    this.setBoxText(box, rivales.toString() + '-' + nosotros.toString())
    this.setBoxState(box, nosotros > rivales ? 'nosotros' : 'rivales')
    return true
  },

  updateSetBoxes: function () {
    this.setBox1Text = '-'
    this.setBox2Text = '-'
    this.setBox3Text = '-'
    this.setBoxState(1, 'neutral')
    this.setBoxState(2, 'neutral')
    this.setBoxState(3, 'neutral')

    var set1Done = this.setFinishedBox(1, this.finalLine1)
    var set2Done = this.setFinishedBox(2, this.finalLine2)
    var set3Done = this.setFinishedBox(3, this.finalLine3)

    if (this.setActual === 1 && !set1Done) {
      this.setBox1Text = this.gamesRivales.toString() + '-' + this.gamesNosotros.toString()
    } else if (this.setActual === 2 && !set2Done) {
      this.setBox2Text = this.gamesRivales.toString() + '-' + this.gamesNosotros.toString()
    } else if (this.enSuperTieBreak) {
      this.setBox3Text = this.superTieRivales.toString() + '-' + this.superTieNosotros.toString()
    } else if (this.setActual === 3 && !set3Done) {
      this.setBox3Text = this.gamesRivales.toString() + '-' + this.gamesNosotros.toString()
    }

    this.updateSetGrid()
  },

  setGridText: function (box, top, bottom) {
    if (box === 1) {
      this.setBox1TopText = top
      this.setBox1BottomText = bottom
    } else if (box === 2) {
      this.setBox2TopText = top
      this.setBox2BottomText = bottom
    } else {
      this.setBox3TopText = top
      this.setBox3BottomText = bottom
    }
  },

  updateSetGrid: function () {
    this.updateSetGridBox(1, this.setBox1Text)
    this.updateSetGridBox(2, this.setBox2Text)
    this.updateSetGridBox(3, this.setBox3Text)
  },

  updateSetGridBox: function (box, text) {
    var dash = text.indexOf('-')
    if (dash < 0 || text === '-') {
      this.setGridText(box, '-', '-')
      return
    }
    this.setGridText(box, text.substring(0, dash), text.substring(dash + 1))
  },

  updateLabels: function () {
    if (this.screen === 'final') {
      return
    }
    if (this.screen === 'game' && (this.setsNosotros >= 2 || this.setsRivales >= 2)) {
      this.checkMatch()
      return
    }

    this.pointsNosotros = this.pointText('nosotros')
    this.pointsRivales = this.pointText('rivales')
    this.updateSetBoxes()

    this.nameNosotros = 'NOSOTROS'
    this.nameRivales = 'RIVALES'
    this.topInfoLine = 'Sets ' + this.setsRivales + ' | Juegos ' + this.gamesRivales
    this.bottomInfoLine = 'Sets ' + this.setsNosotros + ' | Juegos ' + this.gamesNosotros
    var activeServer = this.enTieBreak || this.enSuperTieBreak ? this.activeTieBreakServer() : this.server
    this.serverBallNosotrosVisible = activeServer === 'nosotros'
    this.serverBallRivalesVisible = activeServer === 'rivales'
  }
}
