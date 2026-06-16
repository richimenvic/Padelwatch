import router from '@system.router'
import app from '@system.app'
import storage from '@system.storage'
import vibrator from '@system.vibrator'

export default {
  
  data: {
    screen: 'welcome',
    settingsReturnScreen: 'welcome',
    gameVisible: false,
    gameScreenVisible: false,
    resultVisible: false,

    deuceRule: 'golden',
    deuceText: '40-40: Bola de oro',
    deuceValueText: 'Bola oro',
    deuceChoiceMade: true,
    tieBreakRule: 'normal',
    tieBreakText: '6-6: Tie-break',
    tieBreakValueText: 'Tie-break',
    matchModeRule: 'super',
    matchModeValueText: 'Super TB',
    vibrationEnabled: true,
    vibrationOnVisible: true,
    vibrationOffVisible: false,
    vibrationText: 'Vibración: ON',
    clockText: '',
    clockTimer: 0,

    nameNosotros: 'NOSOTROS',
    nameRivales: 'RIVALES',
    topInfoLine: 'S0 | J0',
    bottomInfoLine: 'S0 | J0',
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
    finalNosSet1: '-',
    finalNosSet2: '-',
    finalNosSet3: '-',
    finalRivSet1: '-',
    finalRivSet2: '-',
    finalRivSet3: '-',

    undoHistoryText: '',
    undoCount: 0,
    deuceChoiceUndoText: '',
    matchChoiceUndoText: '',

    historyItems: [],
    historyText: '[]',
    historyDemoLoaded: false,
    historyDemoRowsInitialized: false,
    historyDeleteRowsEnabled: false,
    historyPage: 0,
    historyCardVisible: false,
    historyPrevVisible: false,
    historyNextVisible: false,
    historyEmptyVisible: true,
    history1Visible: false,
    history2Visible: false,
    history3Visible: false,
    history4Visible: false,
    history1NormalVisible: false,
    history2NormalVisible: false,
    history3NormalVisible: false,
    history4NormalVisible: false,
    history1RivalesVisible: false,
    history1NosotrosVisible: false,
    history2RivalesVisible: false,
    history2NosotrosVisible: false,
    history3RivalesVisible: false,
    history3NosotrosVisible: false,
    history4RivalesVisible: false,
    history4NosotrosVisible: false,
    history1DeleteVisible: false,
    history2DeleteVisible: false,
    history3DeleteVisible: false,
    history4DeleteVisible: false,
    history1DeleteRowVisible: false,
    history2DeleteRowVisible: false,
    history3DeleteRowVisible: false,
    history4DeleteRowVisible: false,
    history1Text: '',
    history2Text: '',
    history3Text: '',
    history4Text: '',
    history1ScoreText: '',
    history2ScoreText: '',
    history3ScoreText: '',
    history4ScoreText: '',
    history1DisplayText: '',
    history2DisplayText: '',
    history3DisplayText: '',
    history4DisplayText: '',
    history1TitleText: '',
    history2TitleText: '',
    history1ScoreLargeText: '',
    history2ScoreLargeText: '',
    history1MetaText: '',
    history2MetaText: '',
    historyResultDate: '',
    historyDebugText: 'Storage --',
    finalDebugText: '',
    lastSaveDebug: '',
    lastFinishedHistoryItemText: '',
    currentFinalHistoryItemText: '',
    finalHistoryCacheText: '[]',
    historyMineSet1: '-',
    historyMineSet2: '-',
    historyMineSet3: '-',
    historyOppSet1: '-',
    historyOppSet2: '-',
    historyOppSet3: '-',
    historyLine1: '',
    historyLine2: '',
    historyLine3: ''
  },

  onInit: function () {
    app.setSwipeToDismiss(true)
    this.startClock()
    this.loadMatchHistory(false)
    this.loadCurrentMatch()
  },

  onShow: function () {
    this.startClock()
    this.loadMatchHistory(false)
    this.loadCurrentMatch()
  },

  onBackPress: function () {
    if (this.screen === 'settings') {
      this.backToWelcome()
      return true
    }

    if (this.screen === 'history') {
      this.closeHistory()
      return true
    }

    if (this.screen === 'server') {
      this.screen = 'welcome'
      return true
    }

    if (this.screen === 'deuce' || this.screen === 'setMode' || this.screen === 'matchMode' || this.screen === 'changeEnds' || this.screen === 'resetConfirm') {
      this.screen = 'game'
      return true
    }

    return false
  },

  startClock: function () {
    var self = this
    this.clockText = this.timeText()

    if (this.clockTimer) {
      clearInterval(this.clockTimer)
    }

    this.clockTimer = setInterval(function () {
      self.clockText = self.timeText()
    }, 15000)
  },

  stopClock: function () {
    if (this.clockTimer) {
      clearInterval(this.clockTimer)
      this.clockTimer = 0
    }
  },

  onDestroy: function () {
    this.saveCurrentMatch()
    this.stopClock()
  },

  startSetup: function () {
    this.clearCurrentMatch()
    this.gameVisible = false
    this.screen = 'server'
    this.resetState()
    this.screen = 'server'
  },

  addFinishedHistoryItem: function (item) {
    if (!item || !item.id) {
      return
    }

    var oldHistory = []

    try {
      if (this.finalHistoryCacheText && this.finalHistoryCacheText !== '[]') {
        oldHistory = JSON.parse(this.finalHistoryCacheText)
      } else if (this.historyText && this.historyText !== '[]') {
        oldHistory = JSON.parse(this.historyText)
      } else if (this.historyItems && this.historyItems.length > 0) {
        oldHistory = this.historyItems
      }
    } catch (e) {
      oldHistory = []
    }

    var history = [item]

    for (var i = 0; i < oldHistory.length && history.length < 20; i++) {
      if (oldHistory[i] && oldHistory[i].id !== item.id) {
        history.push(oldHistory[i])
      }
    }

    this.historyItems = history
    this.historyText = JSON.stringify(history)
    this.finalHistoryCacheText = this.historyText
    this.lastFinishedHistoryItemText = JSON.stringify(item)
    this.currentFinalHistoryItemText = JSON.stringify(item)
    this.lastSavedMatchId = item.id
    this.matchSaved = true
    this.storeHistory(this.historyItems, false)
    this.clearCurrentMatch()
  },

  openFinalHistory: function () {
    this.openHistory()
  },

  openHistory: function () {
    this.screen = 'history'
    this.gameVisible = false
    this.gameScreenVisible = false
    this.finalVisible = false
    this.resultVisible = false
    this.finalNosotrosVisible = false
    this.finalRivalesVisible = false
    this.historyPage = 0
    this.hideHistoryDeletes()

    var history = []

    try {
      if (this.finalHistoryCacheText && this.finalHistoryCacheText !== '[]') {
        history = JSON.parse(this.finalHistoryCacheText)
      } else if (this.historyText && this.historyText !== '[]') {
        history = JSON.parse(this.historyText)
      } else if (this.historyItems && this.historyItems.length > 0) {
        history = this.historyItems
      }
    } catch (e) {
      history = []
    }

    this.historyItems = history
    this.historyText = JSON.stringify(history)
    this.finalHistoryCacheText = this.historyText
    this.renderHistoryRows()

    if (history.length === 0) {
      this.loadMatchHistory(false)
    }
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
      this.deuceValueText = 'Ventaja'
      this.deuceChoiceMade = true
    } else if (this.deuceRule === 'advantage') {
      this.deuceRule = 'golden'
      this.deuceText = '40-40: Bola de oro'
      this.deuceValueText = 'Bola oro'
      this.deuceChoiceMade = true
    } else {
      this.deuceRule = 'ask'
      this.deuceText = '40-40: Preguntar'
      this.deuceValueText = 'Preguntar'
      this.deuceChoiceMade = false
    }
    this.updateLabels()
  },

  resetRulesToAsk: function () {
    this.deuceRule = 'ask'
    this.deuceText = '40-40: Preguntar'
    this.deuceValueText = 'Preguntar'
    this.deuceChoiceMade = false

    this.tieBreakRule = 'ask'
    this.tieBreakText = '6-6: Preguntar'
    this.tieBreakValueText = 'Preguntar'

    this.matchModeRule = 'ask'
    this.matchModeValueText = 'Preguntar'
  },
  cycleMatchModeRule: function () {
    if (this.matchModeRule === 'super') {
      this.matchModeRule = 'third'
      this.matchModeValueText = 'Tercer set'
    } else if (this.matchModeRule === 'third') {
      this.matchModeRule = 'ask'
      this.matchModeValueText = 'Preguntar'
    } else {
      this.matchModeRule = 'super'
      this.matchModeValueText = 'Super TB'
    }
    this.updateLabels()
  },
  cycleTieBreakRule: function () {
    if (this.tieBreakRule === 'ask') {
      this.tieBreakRule = 'normal'
      this.tieBreakText = '6-6: Tie-break normal'
      this.tieBreakValueText = 'Tie-break'
    } else if (this.tieBreakRule === 'normal') {
      this.tieBreakRule = 'differenceTwo'
      this.tieBreakText = '6-6: Dif. 2'
      this.tieBreakValueText = 'Dif. 2'
    } else {
      this.tieBreakRule = 'ask'
      this.tieBreakText = '6-6: Preguntar'
      this.tieBreakValueText = 'Preguntar'
    }
    this.updateLabels()
  },

  doVibrate: function () {
    if (!this.vibrationEnabled) {
      return
    }
    try {
      vibrator.vibrate({
        mode: 'short',
        success: function () {},
        fail: function () {}
      })
    } catch (e) {
    }
  },
  toggleVibration: function () {
    this.vibrationEnabled = !this.vibrationEnabled
    this.vibrationOnVisible = this.vibrationEnabled
    this.vibrationOffVisible = !this.vibrationEnabled
    this.vibrationText = this.vibrationEnabled ? 'Vibración: ON' : 'Vibración: OFF'
    if (this.vibrationEnabled) {
      this.doVibrate()
    }
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
    this.doVibrate()
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
    this.finalLine1 = 'S1: -'
    this.finalLine2 = 'S2: -'
    this.finalLine3 = 'S3: -'
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
    this.doVibrate()
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
      if (this.matchModeRule === 'super') {
        this.chooseSuperTieBreak()
      } else if (this.matchModeRule === 'third') {
        this.chooseThirdSet()
      } else {
        this.screen = 'matchMode'
        this.gameVisible = false
        this.gameScreenVisible = false
      }
      return
    }

    this.setActual++
    this.gamesNosotros = 0
    this.gamesRivales = 0
  },

  saveSetResult: function () {
    if (this.setActual === 1) {
      this.finalLine1 = 'S1: ' + this.gamesNosotros + '-' + this.gamesRivales
    } else if (this.setActual === 2) {
      this.finalLine2 = 'S2: ' + this.gamesNosotros + '-' + this.gamesRivales
    } else {
      this.finalLine3 = 'S3: ' + this.gamesNosotros + '-' + this.gamesRivales
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
    var item = {
      id: new Date().getTime().toString(),
      date: this.todayText(),
      time: this.timeText(),
      winner: winner,
      line1: this.finalLine1 || 'S1: -',
      line2: this.finalLine2 || 'S2: -',
      line3: this.finalLine3 || 'S3: -'
    }

    this.addFinishedHistoryItem(item)
    this.resetRulesToAsk()

    this.winnerText = winner + ' GANAN'
    this.finalWinnerNameText = winner
    this.gameVisible = false
    this.gameScreenVisible = false
    this.screen = 'final'
    this.finalNosotrosVisible = winner === 'NOSOTROS'
    this.finalRivalesVisible = winner === 'RIVALES'

    if (this.finalLine1 === '') {
      this.finalLine1 = 'S1: -'
    }
    if (this.finalLine2 === '') {
      this.finalLine2 = 'S2: -'
    }
    if (this.finalLine3 === '') {
      this.finalLine3 = 'S3: -'
    }

    this.applyFinalScoreboard()
    this.updateFinalResultGrid()
    this.finalScoreLine1 = this.finalResultLineText(this.finalLine1)
    this.finalScoreLine2 = this.finalResultLineText(this.finalLine2)
    this.finalScoreLine3 = this.finalResultLineText(this.finalLine3)
    this.resultWinner = winner
    this.resultSet1 = this.shortResultLineText(this.finalLine1)
    this.resultSet2 = this.shortResultLineText(this.finalLine2)
    this.resultSet3 = this.shortResultLineText(this.finalLine3)
    this.finalScoreR006006Visible = winner === 'RIVALES' &&
      this.finalLine1 === 'S1: 0-6' &&
      this.finalLine2 === 'S2: 0-6'
    this.updateResultSetFlags()

    this.finalDebugText = 'SAVED len=' + this.historyItems.length + ' | ' + this.historyDisplayLine(item)
    this.historyDebugText = this.finalDebugText
    this.lastSaveDebug = this.finalDebugText

    this.storeHistory(this.historyItems, false)
    this.clearCurrentMatch()
    this.renderHistoryRows()

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
      this.finalLine1 = 'S1: -'
    }
    if (this.finalLine2 === '') {
      this.finalLine2 = 'S2: -'
    }
    if (this.finalLine3 === '') {
      this.finalLine3 = 'S3: -'
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
    this.finalDebugText = 'SAVE START winner=' + winner
    this.historyDebugText = this.finalDebugText

    try {
      if (this.matchSaved) {
        this.finalDebugText = 'SAVE BLOCKED matchSaved'
        this.historyDebugText = this.finalDebugText
        return
      }

      if (winner !== 'NOSOTROS' && winner !== 'RIVALES') {
        this.finalDebugText = 'SAVE BLOCKED winner=' + winner
        this.historyDebugText = this.finalDebugText
        return
      }

      var item = {
        id: new Date().getTime().toString(),
        date: this.todayText(),
        time: this.timeText(),
        winner: winner,
        line1: this.finalLine1 || 'S1: -',
        line2: this.finalLine2 || 'S2: -',
        line3: this.finalLine3 || 'S3: -'
      }

      var oldHistory = this.historyItems || []
      var history = [item]

      for (var i = 0; i < oldHistory.length && history.length < 20; i++) {
        history.push(oldHistory[i])
      }

      this.historyItems = history
      this.historyText = JSON.stringify(history)
      this.matchSaved = true
      this.lastSavedMatchId = item.id
      this.lastFinishedHistoryItemText = JSON.stringify(item)

      this.finalDebugText = 'FINAL SAVED len=' + this.historyItems.length + ' | ' + this.historyDisplayLine(item)
      this.historyDebugText = this.finalDebugText
      this.lastSaveDebug = this.finalDebugText

      this.storeHistory(this.historyItems, false)
    this.clearCurrentMatch()
    } catch (e) {
      this.finalDebugText = 'SAVE ERROR ' + e
      this.historyDebugText = this.finalDebugText
      this.lastSaveDebug = this.finalDebugText
    }
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
      this.finalLine3 = 'STB: ' + this.superTieNosotros + '-' + this.superTieRivales
      this.setsNosotros = 2
      this.setsRivales = 1
      this.enSuperTieBreak = false
      this.tieBreakFirstServer = ''
      this.finishMatchDirect('NOSOTROS')
      return true
    } else if (this.superTieRivales >= 10 && this.superTieRivales - this.superTieNosotros >= 2) {
      this.finalLine3 = 'STB: ' + this.superTieNosotros + '-' + this.superTieRivales
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
      this.finalLine3 = 'S3: -'
    }

    this.resultVisible = this.screen === 'final'
    this.finalVisible = this.screen === 'final'
    this.gameVisible = this.screen === 'game'
    this.gameScreenVisible = this.screen === 'game'
  },

  undoPoint: function () {
    this.doVibrate()
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
    this.doVibrate()
    this.resetMatch()
  },

  resetMatch: function () {
    this.resetState()
    this.clearCurrentMatch()

    this.finalNosotrosVisible = false
    this.finalRivalesVisible = false
    this.finalVisible = false
    this.resultVisible = false
    this.gameVisible = false
    this.gameScreenVisible = false

    this.matchSaved = false
    this.lastSavedMatchId = ''
    this.pendingHistorySave = false
    this.pendingHistoryWinner = ''

    this.screen = 'welcome'
  },

  ensureFinalMatchSaved: function () {
    if (this.matchSaved) {
      return
    }
    if (this.finalNosotrosVisible) {
      this.lastSaveDebug = 'final save NOSOTROS'
      this.historyDebugText = this.lastSaveDebug
      this.saveFinishedMatch('NOSOTROS')
    } else if (this.finalRivalesVisible) {
      this.lastSaveDebug = 'final save RIVALES'
      this.historyDebugText = this.lastSaveDebug
      this.saveFinishedMatch('RIVALES')
    }
  },

  parseHistory: function () {
    try {
      var rawText = this.historyText
      var history = JSON.parse(this.historyText)
      if (Object.prototype.toString.call(history) !== '[object Array]') {
        this.historyDebugText = 'parse raw invalid | text=' + rawText
        return []
      }
      var valid = this.validHistory(history)
      this.historyDebugText = 'parse raw length=' + history.length + ' | valid length=' + valid.length
      return valid
    } catch (e) {
      this.historyDebugText = 'parse catch | text=' + this.historyText
      return []
    }
  },

  restoreLastFinishedHistory: function () {
    if (this.parseHistory().length > 0 || this.lastFinishedHistoryItemText === '') {
      return false
    }
    try {
      var item = JSON.parse(this.lastFinishedHistoryItemText)
      var history = this.validHistory([item])
      if (history.length === 0) {
        return false
      }
      this.historyItems = history
      this.historyText = JSON.stringify(history)
      this.historyDebugText = 'restore last | h1=' + this.historyDisplayLine(history[0])
      return true
    } catch (e) {
      return false
    }
  },

  validHistory: function (history) {
    var valid = []
    for (var i = 0; i < history.length; i++) {
      var item = history[i]
      if (!item || !item.winner || !item.line1 || !item.line2) {
        continue
      }

      valid.push({
        id: item.id || ('history-' + i),
        date: item.date || this.todayText(),
        time: item.time || this.timeText(),
        winner: item.winner,
        line1: item.line1,
        line2: item.line2,
        line3: item.line3 || 'S3: -'
      })
    }
    return valid
  },

  storageValue: function (data) {
    if (typeof data === 'string') {
      return data === '' ? '[]' : data
    }
    if (data && typeof data.data === 'string') {
      return data.data === '' ? '[]' : data.data
    }
    if (data && typeof data.value === 'string') {
      return data.value === '' ? '[]' : data.value
    }
    return '[]'
  },

  saveCurrentMatch: function () {
    if (!this.server || this.server === '' || this.finalNosotrosVisible || this.finalRivalesVisible) {
      return
    }

    var v = [
      this.screen,
      this.setsNosotros,
      this.setsRivales,
      this.gamesNosotros,
      this.gamesRivales,
      this.pointIndexNosotros,
      this.pointIndexRivales,
      this.server,
      this.tieBreakFirstServer,
      this.setActual,
      this.enTieBreak ? '1' : '0',
      this.tieBreakNosotros,
      this.tieBreakRivales,
      this.enSuperTieBreak ? '1' : '0',
      this.superTieNosotros,
      this.superTieRivales,
      this.jugarConDiferenciaDos ? '1' : '0',
      this.finalLine1 || '',
      this.finalLine2 || '',
      this.finalLine3 || ''
    ].join('|')

    try {
      storage.set({ key: 'cm', value: v, success: function () {}, fail: function () {} })
    } catch (e) {
    }
  },

  clearCurrentMatch: function () {
    try {
      storage.set({ key: 'cm', value: '', success: function () {}, fail: function () {} })
    } catch (e) {
    }
  },

  loadCurrentMatch: function () {
    var self = this
    try {
      storage.get({
        key: 'cm',
        default: '',
        success: function (data) {
          try {
            var raw = self.storageValue(data)
            if (!raw || raw === '' || raw === '[]' || raw.indexOf('|') < 0) {
              return
            }

            var p = raw.split('|')
            if (p.length < 17 || !p[7]) {
              return
            }

            self.screen = p[0] || 'game'
            self.setsNosotros = parseInt(p[1]) || 0
            self.setsRivales = parseInt(p[2]) || 0
            self.gamesNosotros = parseInt(p[3]) || 0
            self.gamesRivales = parseInt(p[4]) || 0
            self.pointIndexNosotros = parseInt(p[5]) || 0
            self.pointIndexRivales = parseInt(p[6]) || 0
            self.server = p[7] || ''
            self.tieBreakFirstServer = p[8] || ''
            self.setActual = parseInt(p[9]) || 1
            self.enTieBreak = p[10] === '1'
            self.tieBreakNosotros = parseInt(p[11]) || 0
            self.tieBreakRivales = parseInt(p[12]) || 0
            self.enSuperTieBreak = p[13] === '1'
            self.superTieNosotros = parseInt(p[14]) || 0
            self.superTieRivales = parseInt(p[15]) || 0
            self.jugarConDiferenciaDos = p[16] === '1'
            self.finalLine1 = p[17] || ''
            self.finalLine2 = p[18] || ''
            self.finalLine3 = p[19] || ''

            if (self.screen !== 'game' &&
                self.screen !== 'deuce' &&
                self.screen !== 'setMode' &&
                self.screen !== 'matchMode' &&
                self.screen !== 'changeEnds' &&
                self.screen !== 'resetConfirm') {
              self.screen = 'game'
            }

            self.finalNosotrosVisible = false
            self.finalRivalesVisible = false
            self.gameVisible = self.screen === 'game'
            self.gameScreenVisible = self.screen === 'game'
            self.updateLabels()
          } catch (e) {
          }
        },
        fail: function () {}
      })
    } catch (e) {
    }
  },
  loadMatchHistory: function (useDemoFallback) {
    var self = this

    var applyLiteHistory = function (raw) {
      if (!raw || raw === '' || raw === '[]') {
        self.historyItems = []
        self.historyText = '[]'
        self.finalHistoryCacheText = '[]'
        self.historyDebugText = 'LOAD EMPTY'
        self.renderHistoryRows()
        return
      }

      try {
        var rows = raw.split('^')
        var history = []

        for (var i = 0; i < rows.length && history.length < 20; i++) {
          var row = rows[i]
          if (!row || row === '') {
            continue
          }

          var p = row.split('|')
          if (p.length < 7) {
            continue
          }

          history.push({
            id: p[0],
            date: p[1],
            time: p[2],
            winner: p[3],
            line1: p[4],
            line2: p[5],
            line3: p[6]
          })
        }

        self.historyItems = history
        self.historyText = JSON.stringify(history)
        self.finalHistoryCacheText = self.historyText
        self.historyDebugText = 'LOAD MH H=' + history.length
        self.renderHistoryRows()
      } catch (e) {
        self.historyItems = []
        self.historyText = '[]'
        self.finalHistoryCacheText = '[]'
        self.historyDebugText = 'LOAD MH CATCH'
        self.renderHistoryRows()
      }
    }

    try {
      storage.get({
        key: 'mh',
        default: '',
        success: function (data) {
          applyLiteHistory(self.storageValue(data))
        },
        fail: function () {
          self.historyDebugText = 'LOAD MH FAIL'
          self.historyItems = []
          self.historyText = '[]'
          self.finalHistoryCacheText = '[]'
          self.renderHistoryRows()
        }
      })
    } catch (e) {
      self.historyDebugText = 'LOAD MH CATCH'
      self.historyItems = []
      self.historyText = '[]'
      self.finalHistoryCacheText = '[]'
      self.renderHistoryRows()
    }
  },
  ensureDemoHistoryForPreview: function () {
    var history = this.historyItems || []
    if (history.length === 0 && !this.historyDemoLoaded) {
      this.loadDemoHistory()
    } else {
      this.renderHistoryRows()
    }
  },

  storeHistory: function (history, skipLabelUpdate) {
    var self = this

    try {
      this.historyItems = this.validHistory(history || [])
    } catch (e) {
      this.historyItems = history || []
    }

    var rows = []
    for (var i = 0; i < this.historyItems.length && i < 20; i++) {
      var item = this.historyItems[i]
      rows.push([
        item.id || '',
        item.date || '',
        item.time || '',
        item.winner || '',
        item.line1 || '',
        item.line2 || '',
        item.line3 || ''
      ].join('|'))
    }

    var savedText = rows.join('^')
    var len = this.historyItems.length

    this.historyText = JSON.stringify(this.historyItems)
    this.finalHistoryCacheText = this.historyText

    try {
      storage.set({
        key: 'mh',
        value: savedText,
        success: function () {
          self.historyDebugText = 'MH OK H=' + len
          self.lastSaveDebug = self.historyDebugText
        },
        fail: function () {
          self.historyDebugText = 'MH FAIL H=' + len
          self.lastSaveDebug = self.historyDebugText
        }
      })
    } catch (e) {
      this.historyDebugText = 'MH CATCH H=' + len
      this.lastSaveDebug = this.historyDebugText
    }
  },
  updateHistoryDebug: function (prefix) {
  },

  historyLine: function (item) {
    var winner = item.winner === 'NOSOTROS' ? 'NOS' : (item.winner === 'RIVALES' ? 'RIV' : item.winner)
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
    var set1 = this.cleanHistorySet(item.line1, 'S1: ')
    var set2 = this.cleanHistorySet(item.line2, 'S2: ')
    var set3 = this.cleanHistorySet(item.line3, 'S3: ')
    set3 = set3.replace('STB: ', 'ST ')
    var score = set1 + ' ' + set2
    if (set3 !== '' && set3 !== '-') {
      score = score + ' ' + set3
    }
    if (score === ' ') {
      return ''
    }
    return score
  },

  historyDisplayLine: function (item) {
    if (!item) { return '' }

    var winner = item.winner === 'NOSOTROS' ? 'NOS' : (item.winner === 'RIVALES' ? 'RIV' : item.winner)
    var set1 = item.line1 ? item.line1.replace('S1: ', '') : '-'
    var set2 = item.line2 ? item.line2.replace('S2: ', '') : '-'
    var set3 = item.line3 ? item.line3.replace('S3: ', '').replace('STB: ', '') : '-'

    if (!set1 || set1 === '') { set1 = '-' }
    if (!set2 || set2 === '') { set2 = '-' }
    if (!set3 || set3 === '') { set3 = '-' }

    return this.shortDate(item.date) + ' ' + this.shortTime(item.time) + ' ' + winner + '  ' + set1 + ' ' + set2 + ' ' + set3
  },

  cleanHistorySet: function (value, prefix) {
    if (value === undefined || value === null) {
      return ''
    }
    return value.toString().replace(prefix, '')
  },

  finalSetParts: function (value) {
    var clean = value === undefined || value === null ? '-' : value.toString()
    clean = clean.replace('S1: ', '')
    clean = clean.replace('S2: ', '')
    clean = clean.replace('S3: ', '')
    clean = clean.replace('STB: ', '')
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

  applyFinalScoreboard: function () {
    this.finalNosSet1 = '-'
    this.finalNosSet2 = '-'
    this.finalNosSet3 = '-'
    this.finalRivSet1 = '-'
    this.finalRivSet2 = '-'
    this.finalRivSet3 = '-'

    this.applyFinalScoreLine(1, this.finalLine1)
    this.applyFinalScoreLine(2, this.finalLine2)
    this.applyFinalScoreLine(3, this.finalLine3)
  },

  applyFinalScoreLine: function (setNo, line) {
    if (!line || line.indexOf(': ') < 0) {
      return
    }

    var score = line.substring(line.indexOf(': ') + 2)
    if (!score || score === '-') {
      return
    }

    var dash = score.indexOf('-')
    if (dash < 0) {
      return
    }

    var nos = score.substring(0, dash)
    var riv = score.substring(dash + 1)

    if (setNo === 1) {
      this.finalNosSet1 = nos
      this.finalRivSet1 = riv
    } else if (setNo === 2) {
      this.finalNosSet2 = nos
      this.finalRivSet2 = riv
    } else {
      this.finalNosSet3 = nos
      this.finalRivSet3 = riv
    }
  },

  historySetParts: function (value) {
    var clean = value === undefined || value === null ? '-' : value.toString()
    clean = clean.replace('S1: ', '')
    clean = clean.replace('S2: ', '')
    clean = clean.replace('S3: ', '')
    clean = clean.replace('STB: ', '')
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

  applyCurrentHistoryPage: function () {
    var history = []
    try {
      history = JSON.parse(this.historyText)
      if (Object.prototype.toString.call(history) !== '[object Array]') {
        history = []
      }
    } catch (e) {
      history = []
    }

    var item = history[this.historyPage]
    if (!item) {
      this.historyCardVisible = false
      this.historyResultDate = ''
      this.historyMineSet1 = '-'
      this.historyMineSet2 = '-'
      this.historyMineSet3 = '-'
      this.historyOppSet1 = '-'
      this.historyOppSet2 = '-'
      this.historyOppSet3 = '-'
      this.historyLine1 = ''
      this.historyLine2 = ''
      this.historyLine3 = ''
      return
    }

    var set1 = this.historySetParts(item.line1)
    var set2 = this.historySetParts(item.line2)
    var set3 = this.historySetParts(item.line3)
    this.historyEmptyVisible = false
    this.historyCardVisible = true
    this.historyResultDate = item.date || ''
    this.historyMineSet1 = set1[0]
    this.historyOppSet1 = set1[1]
    this.historyMineSet2 = set2[0]
    this.historyOppSet2 = set2[1]
    this.historyMineSet3 = set3[0]
    this.historyOppSet3 = set3[1]
    this.historyLine1 = item.line1 || ''
    this.historyLine2 = item.line2 || ''
    this.historyLine3 = item.line3 || ''
  },

  updateHistoryLabels: function () {
    this.renderHistoryRows()
  },

  historyWinnerShort: function (winner) {
    if (winner === 'NOSOTROS') {
      return 'NOS'
    }
    if (winner === 'RIVALES') {
      return 'RIV'
    }
    return winner || '-'
  },

  historyMatchWinsText: function (item) {
    if (!item) { return '-' }

    var nosWins = 0
    var rivWins = 0
    var s1 = this.historySetParts(item.line1)
    var s2 = this.historySetParts(item.line2)
    var s3 = this.historySetParts(item.line3)
    var sets = [s1, s2, s3]

    for (var i = 0; i < sets.length; i++) {
      var nos = parseInt(sets[i][0])
      var riv = parseInt(sets[i][1])
      if (!isNaN(nos) && !isNaN(riv)) {
        if (nos > riv) {
          nosWins = nosWins + 1
        } else if (riv > nos) {
          rivWins = rivWins + 1
        }
      }
    }

    return nosWins + '-' + rivWins
  },

  safeHistoryScoreText: function (item) {
    if (!item) { return '' }

    var hasThird = false
    if (item.line3 &&
        item.line3.indexOf(': -') < 0 &&
        item.line3.indexOf('-') >= 0) {
      hasThird = true
    }

    if (item.winner === 'NOSOTROS') {
      return hasThird ? '2-1' : '2-0'
    }

    if (item.winner === 'RIVALES') {
      return hasThird ? '1-2' : '0-2'
    }

    return '-'
  },

  historySetsTitleText: function (item) {
    if (!item) { return '' }

    var text = this.shortTime(item.time)
    var scores = []

    if (item.line1 && item.line1.indexOf(': ') >= 0 && item.line1.indexOf(': -') < 0) {
      scores.push(item.line1.substring(item.line1.indexOf(': ') + 2))
    }
    if (item.line2 && item.line2.indexOf(': ') >= 0 && item.line2.indexOf(': -') < 0) {
      scores.push(item.line2.substring(item.line2.indexOf(': ') + 2))
    }
    if (item.line3 && item.line3.indexOf(': ') >= 0 && item.line3.indexOf(': -') < 0) {
      scores.push(item.line3.substring(item.line3.indexOf(': ') + 2))
    }

    if (scores.length > 0) {
      text = text + '   ' + scores.join(' | ')
    }

    return text
  },

  historyMetaText: function (item) {
    if (!item) { return '' }
    return this.shortDate(item.date) + ' · gana ' + this.historyWinnerShort(item.winner)
  },


  renderHistoryRows: function () {
    var history = this.historyItems || []
    var offset = this.historyPage || 0

    if (history.length > 0 && offset >= history.length) {
      offset = Math.max(0, history.length - 1)
      this.historyPage = offset
    }

    var item1 = history.length > offset ? history[offset] : null
    var item2 = history.length > offset + 1 ? history[offset + 1] : null

    this.historyEmptyVisible = item1 === null

    this.history1Visible = item1 !== null
    this.history2Visible = item2 !== null
    this.history3Visible = false
    this.history4Visible = false

    this.history1NormalVisible = item1 !== null && !this.history1DeleteVisible
    this.history2NormalVisible = item2 !== null && !this.history2DeleteVisible
    this.history3NormalVisible = false
    this.history4NormalVisible = false

    this.history1DeleteRowVisible = false
    this.history2DeleteRowVisible = false
    this.history3DeleteRowVisible = false
    this.history4DeleteRowVisible = false

    this.history1RivalesVisible = item1 && item1.winner === 'RIVALES'
    this.history1NosotrosVisible = item1 && item1.winner === 'NOSOTROS'
    this.history2RivalesVisible = item2 && item2.winner === 'RIVALES'
    this.history2NosotrosVisible = item2 && item2.winner === 'NOSOTROS'
    this.history3RivalesVisible = false
    this.history3NosotrosVisible = false
    this.history4RivalesVisible = false
    this.history4NosotrosVisible = false

    this.history1TitleText = item1 ? this.historySetsTitleText(item1) : ''
    this.history2TitleText = item2 ? this.historySetsTitleText(item2) : ''

    this.history1ScoreLargeText = item1 ? this.safeHistoryScoreText(item1) : ''
    this.history2ScoreLargeText = item2 ? this.safeHistoryScoreText(item2) : ''

    this.history1MetaText = item1 ? this.historyMetaText(item1) : ''
    this.history2MetaText = item2 ? this.historyMetaText(item2) : ''

    this.history1DisplayText = item1 ? 'CARD 1' : ''
    this.history2DisplayText = item2 ? 'CARD 2' : ''
    this.history3DisplayText = ''
    this.history4DisplayText = ''

    this.historyPrevVisible = offset > 0
    this.historyNextVisible = offset + 2 < history.length

    this.historyDebugText = this.lastSaveDebug || this.historyDebugText || 'Storage --'
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
    var history = this.historyItems || []
    var realIndex = this.historyPage + index
    if (realIndex < 0 || realIndex >= history.length) {
      this.hideHistoryDeletes()
      return
    }
    this.historyItems.splice(realIndex, 1)
    if (this.historyItems.length === 0) {
      this.lastFinishedHistoryItemText = ''
      this.finalHistoryCacheText = '[]'
      this.historyPage = 0
    } else if (this.historyPage >= this.historyItems.length) {
      this.historyPage = Math.max(0, this.historyItems.length - 2)
    }
    this.historyText = JSON.stringify(this.historyItems)
    this.finalHistoryCacheText = this.historyText
    this.storeHistory(this.historyItems, false)
    this.clearCurrentMatch()
    this.hideHistoryDeletes()
    this.renderHistoryRows()
  },

  deleteHistoryById: function (id) {
    var history = this.historyItems || []
    for (var i = 0; i < history.length; i++) {
      if (history[i].id === id) {
        this.historyItems.splice(i, 1)
        if (this.historyItems.length === 0) {
          this.lastFinishedHistoryItemText = ''
          this.historyPage = 0
        } else if (this.historyPage >= this.historyItems.length) {
          this.historyPage = Math.max(0, this.historyItems.length - 2)
        }
        this.historyText = JSON.stringify(this.historyItems)
        this.storeHistory(this.historyItems, false)
    this.clearCurrentMatch()
        this.renderHistoryRows()
        return
      }
    }
  },

  hideHistoryDeletes: function () {
    this.history1DeleteVisible = false
    this.history2DeleteVisible = false
    this.history3DeleteVisible = false
    this.history4DeleteVisible = false
    this.updateHistoryRowVisibility()
  },

  updateHistoryRowVisibility: function () {
    this.history1NormalVisible = this.history1Visible && !this.history1DeleteVisible
    this.history2NormalVisible = this.history2Visible && !this.history2DeleteVisible
    this.history3NormalVisible = this.history3Visible && !this.history3DeleteVisible
    this.history4NormalVisible = this.history4Visible && !this.history4DeleteVisible
    this.history1DeleteRowVisible = this.history1Visible && this.history1DeleteVisible
    this.history2DeleteRowVisible = this.history2Visible && this.history2DeleteVisible
    this.history3DeleteRowVisible = this.history3Visible && this.history3DeleteVisible
    this.history4DeleteRowVisible = this.history4Visible && this.history4DeleteVisible
    this.historyEmptyVisible = !(this.history1Visible || this.history2Visible || this.history3Visible || this.history4Visible)
  },

  showHistoryDelete: function (index) {
    this.hideHistoryDeletes()
    if (index === 0) {
      this.history1DeleteVisible = true
    } else if (index === 1) {
      this.history2DeleteVisible = true
    } else if (index === 2) {
      this.history3DeleteVisible = true
    } else if (index === 3) {
      this.history4DeleteVisible = true
    }
    this.updateHistoryRowVisibility()
  },

  showHistoryDelete1: function () {
    this.showHistoryDelete(0)
  },

  showHistoryDelete2: function () {
    this.showHistoryDelete(1)
  },

  showHistoryDelete3: function () {
    this.showHistoryDelete(2)
  },

  showHistoryDelete4: function () {
    this.showHistoryDelete(3)
  },

  historyPrevPage: function () {
    if (this.historyPage > 0) {
      this.historyPage = Math.max(0, this.historyPage - 2)
      this.hideHistoryDeletes()
      this.renderHistoryRows()
    }
  },

  historyNextPage: function () {
    var history = this.historyItems || []
    if (this.historyPage + 2 < history.length) {
      this.historyPage = this.historyPage + 2
      this.hideHistoryDeletes()
      this.renderHistoryRows()
    }
  },

  demoHistoryItems: function () {
    return [
      {
        id: 'demo-1',
        date: '2026-06-05',
        time: '10:00',
        winner: 'NOSOTROS',
        line1: 'S1: 6-3',
        line2: 'S2: 6-4',
        line3: 'S3: -'
      },
      {
        id: 'demo-2',
        date: '2026-06-05',
        time: '10:15',
        winner: 'RIVALES',
        line1: 'S1: 0-6',
        line2: 'S2: 1-6',
        line3: 'S3: -'
      },
      {
        id: 'demo-3',
        date: '2026-06-05',
        time: '10:30',
        winner: 'NOSOTROS',
        line1: 'S1: 6-7',
        line2: 'S2: 6-4',
        line3: 'STB: 10-8'
      },
      {
        id: 'demo-4',
        date: '2026-06-05',
        time: '10:45',
        winner: 'RIVALES',
        line1: 'S1: 4-6',
        line2: 'S2: 4-6',
        line3: 'S3: -'
      }
    ]
  },

  loadDemoHistory: function () {
    // TEMP DEMO HISTORY - remove before release
    var demoHistory = this.demoHistoryItems().slice(0, 4)
    this.historyDemoLoaded = true
    this.historyItems = this.validHistory(demoHistory)
    this.historyText = JSON.stringify(this.historyItems)
    this.finalHistoryCacheText = this.historyText
    this.storeHistory(this.historyItems, false)
    this.clearCurrentMatch()
    this.renderHistoryRows()
  },
  handleAppSwipe: function (event) {
    if (!event || event.direction !== 'right') {
      return
    }

    try {
      app.terminate()
    } catch (e) {
    }

    try {
      router.back()
    } catch (e2) {
    }

    try {
      if (this.context && this.context.terminateSelf) {
        this.context.terminateSelf()
      }
    } catch (e3) {
    }
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

  deleteHistory4: function () {
    this.deleteHistoryAt(3)
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
    if (line.indexOf('STB: ') === 0) {
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
    this.clockText = this.timeText()
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
    this.topInfoLine = 'S' + this.setsRivales + ' | J' + this.gamesRivales
    this.bottomInfoLine = 'S' + this.setsNosotros + ' | J' + this.gamesNosotros
    var activeServer = this.enTieBreak || this.enSuperTieBreak ? this.activeTieBreakServer() : this.server
    this.serverBallNosotrosVisible = activeServer === 'nosotros'
    this.serverBallRivalesVisible = activeServer === 'rivales'
    this.saveCurrentMatch()
  }
}











































