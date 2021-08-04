function Ballot(winner, user, lottery){
    this.winner = winner
    this.fk_user = user
    this.fk_lottery = lottery
}

module.exports = {
    Ballot: Ballot
}