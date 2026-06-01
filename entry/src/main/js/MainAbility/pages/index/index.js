export default {
    data: {
        puntosNosotros: '0',
        puntosRivales: '0',

        juegosNosotros: 0,
        juegosRivales: 0,

        setsNosotros: 0,
        setsRivales: 0,

        setActual: 1,

        enTieBreak: false,
        tieBreakNosotros: 0,
        tieBreakRivales: 0,

        enSuperTieBreak: false,
        superTieNosotros: 0,
        superTieRivales: 0,

        decidirModoSet: false,
        jugarConDiferenciaDos: false,

        showHeader: true,
        showDecision: false,
        showScore: true,
        showResetConfirm: false,
        showMatchModeDecision: false,
        showFinalSummary: false,
        showFinalLine3: false,

        finalGanamos: false,
        finalRivales: false,

        partidoTerminado: false,
        ganadorPartido: '',

        estadoSet: 'Set 1    Sets 0-0',
        estadoJuegos: 'Juegos 0-0',

        finalLine1: 'Set 1: -',
        finalLine2: 'Set 2: -',
        finalLine3: 'Set 3: -',

        hayDeshacer: false,

        prevPuntosNosotros: '0',
        prevPuntosRivales: '0',
        prevJuegosNosotros: 0,
        prevJuegosRivales: 0,
        prevSetsNosotros: 0,
        prevSetsRivales: 0,
        prevSetActual: 1,
        prevEnTieBreak: false,
        prevTieBreakNosotros: 0,
        prevTieBreakRivales: 0,
        prevEnSuperTieBreak: false,
        prevSuperTieNosotros: 0,
        prevSuperTieRivales: 0,
        prevDecidirModoSet: false,
        prevJugarConDiferenciaDos: false,
        prevShowHeader: true,
        prevShowDecision: false,
        prevShowScore: true,
        prevShowResetConfirm: false,
        prevShowMatchModeDecision: false,
        prevShowFinalSummary: false,
        prevShowFinalLine3: false,
        prevFinalGanamos: false,
        prevFinalRivales: false,
        prevPartidoTerminado: false,
        prevGanadorPartido: '',
        prevEstadoSet: 'Set 1    Sets 0-0',
        prevEstadoJuegos: 'Juegos 0-0',
        prevFinalLine1: 'Set 1: -',
        prevFinalLine2: 'Set 2: -',
        prevFinalLine3: 'Set 3: -'
    },

    addPoint(equipo) {
        if (this.partidoTerminado || this.decidirModoSet || this.showResetConfirm || this.showMatchModeDecision) {
            return;
        }

        this.saveUndoState();

        if (this.enSuperTieBreak) {
            this.addSuperTieBreakPoint(equipo);
            return;
        }

        if (this.enTieBreak) {
            this.addTieBreakPoint(equipo);
            return;
        }

        if (equipo === 'nosotros') {
            this.addNormalPoint('nosotros');
        } else {
            this.addNormalPoint('rivales');
        }

        this.updateDisplay();
    },

    saveUndoState() {
        this.prevPuntosNosotros = this.puntosNosotros;
        this.prevPuntosRivales = this.puntosRivales;

        this.prevJuegosNosotros = this.juegosNosotros;
        this.prevJuegosRivales = this.juegosRivales;

        this.prevSetsNosotros = this.setsNosotros;
        this.prevSetsRivales = this.setsRivales;

        this.prevSetActual = this.setActual;

        this.prevEnTieBreak = this.enTieBreak;
        this.prevTieBreakNosotros = this.tieBreakNosotros;
        this.prevTieBreakRivales = this.tieBreakRivales;

        this.prevEnSuperTieBreak = this.enSuperTieBreak;
        this.prevSuperTieNosotros = this.superTieNosotros;
        this.prevSuperTieRivales = this.superTieRivales;

        this.prevDecidirModoSet = this.decidirModoSet;
        this.prevJugarConDiferenciaDos = this.jugarConDiferenciaDos;

        this.prevShowHeader = this.showHeader;
        this.prevShowDecision = this.showDecision;
        this.prevShowScore = this.showScore;
        this.prevShowResetConfirm = this.showResetConfirm;
        this.prevShowMatchModeDecision = this.showMatchModeDecision;
        this.prevShowFinalSummary = this.showFinalSummary;
        this.prevShowFinalLine3 = this.showFinalLine3;

        this.prevFinalGanamos = this.finalGanamos;
        this.prevFinalRivales = this.finalRivales;

        this.prevPartidoTerminado = this.partidoTerminado;
        this.prevGanadorPartido = this.ganadorPartido;

        this.prevEstadoSet = this.estadoSet;
        this.prevEstadoJuegos = this.estadoJuegos;

        this.prevFinalLine1 = this.finalLine1;
        this.prevFinalLine2 = this.finalLine2;
        this.prevFinalLine3 = this.finalLine3;

        this.hayDeshacer = true;
    },

    addNormalPoint(equipo) {
        if (equipo === 'nosotros') {
            if (this.puntosNosotros === '40') {
                this.winGame('nosotros');
                return;
            }

            this.puntosNosotros = this.nextPoint(this.puntosNosotros);
            return;
        }

        if (this.puntosRivales === '40') {
            this.winGame('rivales');
            return;
        }

        this.puntosRivales = this.nextPoint(this.puntosRivales);
    },

    nextPoint(puntoActual) {
        if (puntoActual === '0') {
            return '15';
        }

        if (puntoActual === '15') {
            return '30';
        }

        if (puntoActual === '30') {
            return '40';
        }

        return '0';
    },

    winGame(equipo) {
        if (equipo === 'nosotros') {
            this.juegosNosotros = this.juegosNosotros + 1;
        } else {
            this.juegosRivales = this.juegosRivales + 1;
        }

        this.puntosNosotros = '0';
        this.puntosRivales = '0';

        if (this.juegosNosotros === 6 && this.juegosRivales === 6 && !this.jugarConDiferenciaDos) {
            this.askSetMode();
            return;
        }

        this.checkSetWinner();
        this.updateDisplay();
    },

    askSetMode() {
        this.decidirModoSet = true;
        this.enTieBreak = false;
        this.enSuperTieBreak = false;

        this.showHeader = true;
        this.showDecision = true;
        this.showScore = false;
        this.showResetConfirm = false;
        this.showMatchModeDecision = false;
        this.showFinalSummary = false;

        this.estadoSet = 'Set ' + this.setActual + '    Sets ' + this.setsNosotros + '-' + this.setsRivales;
        this.estadoJuegos = 'Elige modo 6-6';
    },

    chooseTieBreak() {
        if (!this.decidirModoSet) {
            return;
        }

        this.saveUndoState();

        this.decidirModoSet = false;
        this.jugarConDiferenciaDos = false;

        this.enTieBreak = true;
        this.tieBreakNosotros = 0;
        this.tieBreakRivales = 0;

        this.enSuperTieBreak = false;
        this.superTieNosotros = 0;
        this.superTieRivales = 0;

        this.showHeader = true;
        this.showDecision = false;
        this.showScore = true;
        this.showResetConfirm = false;
        this.showMatchModeDecision = false;
        this.showFinalSummary = false;

        this.puntosNosotros = '0';
        this.puntosRivales = '0';

        this.updateDisplay();
    },

    chooseDifferenceTwo() {
        if (!this.decidirModoSet) {
            return;
        }

        this.saveUndoState();

        this.decidirModoSet = false;
        this.jugarConDiferenciaDos = true;

        this.enTieBreak = false;
        this.tieBreakNosotros = 0;
        this.tieBreakRivales = 0;

        this.enSuperTieBreak = false;
        this.superTieNosotros = 0;
        this.superTieRivales = 0;

        this.showHeader = true;
        this.showDecision = false;
        this.showScore = true;
        this.showResetConfirm = false;
        this.showMatchModeDecision = false;
        this.showFinalSummary = false;

        this.puntosNosotros = '0';
        this.puntosRivales = '0';

        this.updateDisplay();
    },

    addTieBreakPoint(equipo) {
        if (equipo === 'nosotros') {
            this.tieBreakNosotros = this.tieBreakNosotros + 1;
        } else {
            this.tieBreakRivales = this.tieBreakRivales + 1;
        }

        this.puntosNosotros = this.tieBreakNosotros.toString();
        this.puntosRivales = this.tieBreakRivales.toString();

        this.checkTieBreakWinner();
        this.updateDisplay();
    },

    checkTieBreakWinner() {
        if (this.tieBreakNosotros >= 7 && this.tieBreakNosotros - this.tieBreakRivales >= 2) {
            this.juegosNosotros = 7;
            this.juegosRivales = 6;
            this.winSet('nosotros');
            return;
        }

        if (this.tieBreakRivales >= 7 && this.tieBreakRivales - this.tieBreakNosotros >= 2) {
            this.juegosNosotros = 6;
            this.juegosRivales = 7;
            this.winSet('rivales');
            return;
        }
    },

    addSuperTieBreakPoint(equipo) {
        if (equipo === 'nosotros') {
            this.superTieNosotros = this.superTieNosotros + 1;
        } else {
            this.superTieRivales = this.superTieRivales + 1;
        }

        this.puntosNosotros = this.superTieNosotros.toString();
        this.puntosRivales = this.superTieRivales.toString();

        this.checkSuperTieBreakWinner();
        this.updateDisplay();
    },

    checkSuperTieBreakWinner() {
        if (this.superTieNosotros >= 10 && this.superTieNosotros - this.superTieRivales >= 2) {
            this.finishMatchBySuperTieBreak('nosotros');
            return;
        }

        if (this.superTieRivales >= 10 && this.superTieRivales - this.superTieNosotros >= 2) {
            this.finishMatchBySuperTieBreak('rivales');
            return;
        }
    },

    finishMatchBySuperTieBreak(equipo) {
        this.finalLine3 = 'Super TB: ' + this.superTieNosotros + '-' + this.superTieRivales;
        this.showFinalLine3 = true;

        if (equipo === 'nosotros') {
            this.setsNosotros = 2;
            this.setsRivales = 1;
            this.ganadorPartido = 'nosotros';
            this.finalGanamos = true;
            this.finalRivales = false;
        } else {
            this.setsNosotros = 1;
            this.setsRivales = 2;
            this.ganadorPartido = 'rivales';
            this.finalGanamos = false;
            this.finalRivales = true;
        }

        this.enSuperTieBreak = false;
        this.enTieBreak = false;
        this.decidirModoSet = false;
        this.jugarConDiferenciaDos = false;

        this.showHeader = true;
        this.showDecision = false;
        this.showScore = false;
        this.showResetConfirm = false;
        this.showMatchModeDecision = false;
        this.showFinalSummary = true;

        this.partidoTerminado = true;

        this.updateDisplay();
    },

    checkSetWinner() {
        if (this.enTieBreak || this.decidirModoSet || this.enSuperTieBreak || this.showMatchModeDecision) {
            return;
        }

        if (this.juegosNosotros >= 6 && this.juegosNosotros - this.juegosRivales >= 2) {
            this.winSet('nosotros');
            return;
        }

        if (this.juegosRivales >= 6 && this.juegosRivales - this.juegosNosotros >= 2) {
            this.winSet('rivales');
            return;
        }
    },

    saveSetResult() {
        if (this.setActual === 1) {
            this.finalLine1 = 'Set 1: ' + this.juegosNosotros + '-' + this.juegosRivales;
        }

        if (this.setActual === 2) {
            this.finalLine2 = 'Set 2: ' + this.juegosNosotros + '-' + this.juegosRivales;
        }

        if (this.setActual === 3) {
            this.finalLine3 = 'Set 3: ' + this.juegosNosotros + '-' + this.juegosRivales;
            this.showFinalLine3 = true;
        }
    },

    winSet(equipo) {
        this.saveSetResult();

        if (equipo === 'nosotros') {
            this.setsNosotros = this.setsNosotros + 1;
        } else {
            this.setsRivales = this.setsRivales + 1;
        }

        this.enTieBreak = false;
        this.tieBreakNosotros = 0;
        this.tieBreakRivales = 0;

        this.enSuperTieBreak = false;
        this.superTieNosotros = 0;
        this.superTieRivales = 0;

        this.decidirModoSet = false;
        this.jugarConDiferenciaDos = false;

        this.showHeader = true;
        this.showDecision = false;
        this.showScore = true;
        this.showResetConfirm = false;
        this.showMatchModeDecision = false;
        this.showFinalSummary = false;

        this.puntosNosotros = '0';
        this.puntosRivales = '0';

        if (this.setsNosotros === 2 || this.setsRivales === 2) {
            this.partidoTerminado = true;
            this.showScore = false;
            this.showFinalSummary = true;

            if (this.setsNosotros === 2) {
                this.ganadorPartido = 'nosotros';
                this.finalGanamos = true;
                this.finalRivales = false;
            } else {
                this.ganadorPartido = 'rivales';
                this.finalGanamos = false;
                this.finalRivales = true;
            }

            this.updateDisplay();
            return;
        }

        if (this.setsNosotros === 1 && this.setsRivales === 1) {
            this.askMatchMode();
            return;
        }

        this.setActual = this.setActual + 1;
        this.juegosNosotros = 0;
        this.juegosRivales = 0;

        this.updateDisplay();
    },

    askMatchMode() {
        this.enSuperTieBreak = false;
        this.superTieNosotros = 0;
        this.superTieRivales = 0;

        this.enTieBreak = false;
        this.tieBreakNosotros = 0;
        this.tieBreakRivales = 0;

        this.decidirModoSet = false;
        this.jugarConDiferenciaDos = false;

        this.showHeader = true;
        this.showMatchModeDecision = true;
        this.showDecision = false;
        this.showScore = false;
        this.showResetConfirm = false;
        this.showFinalSummary = false;

        this.juegosNosotros = 0;
        this.juegosRivales = 0;
        this.puntosNosotros = '0';
        this.puntosRivales = '0';

        this.estadoSet = 'Sets 1-1';
        this.estadoJuegos = 'Elige final';
    },

    chooseThirdSet() {
        this.saveUndoState();

        this.showHeader = true;
        this.showMatchModeDecision = false;
        this.showDecision = false;
        this.showScore = true;
        this.showResetConfirm = false;
        this.showFinalSummary = false;

        this.enSuperTieBreak = false;
        this.superTieNosotros = 0;
        this.superTieRivales = 0;

        this.enTieBreak = false;
        this.tieBreakNosotros = 0;
        this.tieBreakRivales = 0;

        this.jugarConDiferenciaDos = false;
        this.decidirModoSet = false;

        this.setActual = 3;
        this.juegosNosotros = 0;
        this.juegosRivales = 0;
        this.puntosNosotros = '0';
        this.puntosRivales = '0';

        this.updateDisplay();
    },

    chooseSuperTieBreak() {
        this.saveUndoState();

        this.showHeader = true;
        this.showMatchModeDecision = false;
        this.showDecision = false;
        this.showScore = true;
        this.showResetConfirm = false;
        this.showFinalSummary = false;

        this.enSuperTieBreak = true;
        this.superTieNosotros = 0;
        this.superTieRivales = 0;

        this.enTieBreak = false;
        this.tieBreakNosotros = 0;
        this.tieBreakRivales = 0;

        this.jugarConDiferenciaDos = false;
        this.decidirModoSet = false;

        this.setActual = 3;
        this.juegosNosotros = 0;
        this.juegosRivales = 0;
        this.puntosNosotros = '0';
        this.puntosRivales = '0';

        this.updateDisplay();
    },

    updateDisplay() {
        if (this.partidoTerminado) {
            this.estadoSet = 'Resultado final';
            this.estadoJuegos = 'Sets ' + this.setsNosotros + '-' + this.setsRivales;
            this.showHeader = true;
            return;
        }

        if (this.showMatchModeDecision) {
            this.estadoSet = 'Sets 1-1';
            this.estadoJuegos = 'Elige final';
            return;
        }

        if (this.enSuperTieBreak) {
            this.estadoSet = 'Sets ' + this.setsNosotros + '-' + this.setsRivales;
            this.estadoJuegos = 'Super TB ' + this.superTieNosotros + '-' + this.superTieRivales;
            return;
        }

        this.estadoSet = 'Set ' + this.setActual + '    Sets ' + this.setsNosotros + '-' + this.setsRivales;

        if (this.decidirModoSet) {
            this.estadoJuegos = 'Elige modo 6-6';
            return;
        }

        if (this.enTieBreak) {
            this.estadoJuegos = 'Tie-break ' + this.tieBreakNosotros + '-' + this.tieBreakRivales;
            return;
        }

        if (this.jugarConDiferenciaDos) {
            this.estadoJuegos = 'Dif. 2    Juegos ' + this.juegosNosotros + '-' + this.juegosRivales;
            return;
        }

        this.estadoJuegos = 'Juegos ' + this.juegosNosotros + '-' + this.juegosRivales;
    },

    askReset() {
        this.showResetConfirm = true;
        this.showHeader = true;
        this.showScore = false;
        this.showDecision = false;
        this.showMatchModeDecision = false;
        this.showFinalSummary = false;
    },

    cancelReset() {
        this.showResetConfirm = false;

        if (this.partidoTerminado) {
            this.showHeader = true;
            this.showDecision = false;
            this.showScore = false;
            this.showMatchModeDecision = false;
            this.showFinalSummary = true;
            return;
        }

        if (this.decidirModoSet) {
            this.showHeader = true;
            this.showDecision = true;
            this.showScore = false;
            this.showMatchModeDecision = false;
            this.showFinalSummary = false;
            return;
        }

        if (this.showMatchModeDecision) {
            this.showHeader = true;
            this.showDecision = false;
            this.showScore = false;
            this.showFinalSummary = false;
            return;
        }

        this.showHeader = true;
        this.showDecision = false;
        this.showScore = true;
        this.showMatchModeDecision = false;
        this.showFinalSummary = false;
    },

    confirmReset() {
        this.resetMatch();
    },

    undoPoint() {
        if (this.showResetConfirm) {
            this.cancelReset();
            return;
        }

        if (!this.hayDeshacer) {
            return;
        }

        this.puntosNosotros = this.prevPuntosNosotros;
        this.puntosRivales = this.prevPuntosRivales;

        this.juegosNosotros = this.prevJuegosNosotros;
        this.juegosRivales = this.prevJuegosRivales;

        this.setsNosotros = this.prevSetsNosotros;
        this.setsRivales = this.prevSetsRivales;

        this.setActual = this.prevSetActual;

        this.enTieBreak = this.prevEnTieBreak;
        this.tieBreakNosotros = this.prevTieBreakNosotros;
        this.tieBreakRivales = this.prevTieBreakRivales;

        this.enSuperTieBreak = this.prevEnSuperTieBreak;
        this.superTieNosotros = this.prevSuperTieNosotros;
        this.superTieRivales = this.prevSuperTieRivales;

        this.decidirModoSet = this.prevDecidirModoSet;
        this.jugarConDiferenciaDos = this.prevJugarConDiferenciaDos;

        this.showHeader = this.prevShowHeader;
        this.showDecision = this.prevShowDecision;
        this.showScore = this.prevShowScore;
        this.showResetConfirm = this.prevShowResetConfirm;
        this.showMatchModeDecision = this.prevShowMatchModeDecision;
        this.showFinalSummary = this.prevShowFinalSummary;
        this.showFinalLine3 = this.prevShowFinalLine3;

        this.finalGanamos = this.prevFinalGanamos;
        this.finalRivales = this.prevFinalRivales;

        this.partidoTerminado = this.prevPartidoTerminado;
        this.ganadorPartido = this.prevGanadorPartido;

        this.estadoSet = this.prevEstadoSet;
        this.estadoJuegos = this.prevEstadoJuegos;

        this.finalLine1 = this.prevFinalLine1;
        this.finalLine2 = this.prevFinalLine2;
        this.finalLine3 = this.prevFinalLine3;

        this.hayDeshacer = false;
    },

    resetMatch() {
        this.puntosNosotros = '0';
        this.puntosRivales = '0';

        this.juegosNosotros = 0;
        this.juegosRivales = 0;

        this.setsNosotros = 0;
        this.setsRivales = 0;

        this.setActual = 1;

        this.enTieBreak = false;
        this.tieBreakNosotros = 0;
        this.tieBreakRivales = 0;

        this.enSuperTieBreak = false;
        this.superTieNosotros = 0;
        this.superTieRivales = 0;

        this.decidirModoSet = false;
        this.jugarConDiferenciaDos = false;

        this.showHeader = true;
        this.showDecision = false;
        this.showScore = true;
        this.showResetConfirm = false;
        this.showMatchModeDecision = false;
        this.showFinalSummary = false;
        this.showFinalLine3 = false;

        this.finalGanamos = false;
        this.finalRivales = false;

        this.partidoTerminado = false;
        this.ganadorPartido = '';

        this.estadoSet = 'Set 1    Sets 0-0';
        this.estadoJuegos = 'Juegos 0-0';

        this.finalLine1 = 'Set 1: -';
        this.finalLine2 = 'Set 2: -';
        this.finalLine3 = 'Set 3: -';

        this.hayDeshacer = false;
    }
}