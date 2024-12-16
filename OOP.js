class Resident {
  constructor(name, age, hasRegistered) {
      this.name = name;
      this.age = age;
      this.hasRegistered = hasRegistered;
  }

  canVote() {
    return this.age >= 18 && this.hasRegistered === true;
  }
}

class VotingPeople {
  static getNumberOfVoters(residents) {
    return residents.filter(resident => resident.canVote()).length;
  }
}

module.exports = { Resident, VotingPeople }