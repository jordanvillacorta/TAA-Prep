const obj = {
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 9,
  },
  round3: {
    me: 20,
    spouse: 20,
  },
}

const obj2 = {
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 14,
  },
  round3: {
    me: 10,
    spouse: 55,
  },
}

const obj3 = {
  round1: {
    me: 10,
    spouse: 9,
  },
  round2: {
    me: 11,
    spouse: 12,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
}

Test.assertEquals(determineWinnerOfFight(obj), "ME!")
Test.assertEquals(determineWinnerOfFight(obj2), "SPOUSE!")
Test.assertEquals(determineWinnerOfFight(obj3), "NOBODY!")