function Ballot(winner, user, lottery){
    this.winner = winner
    this.fk_user = user.id
    this.fk_lottery = lottery.id
}

module.exports = {
    Ballot: Ballot
}