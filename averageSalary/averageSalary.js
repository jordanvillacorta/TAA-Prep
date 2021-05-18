function (salary) {
    let avgSalary = 0;
    let newSalary = salary.sort();
    newSalary.pop();
    newSalary.shift();
    for (let i = 0; i < newSalary.length; i++) {
      avgSalary += newSalary[i];
    }
    return avgSalary / newSalary.length;
  };