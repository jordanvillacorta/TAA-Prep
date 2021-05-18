  function(salary) {
    let avgSalary = 0;
    let newSalary = salary.sort();
    // newSalary.pop();
    // newSalary.shift();
    let minSal = newSalary[0];
    let maxSal = newSalary[0];
    for (let i = 0; i < newSalary.length; i++) {
      if (newSalary[i] < minSal) {
        minSal = newSalary[i];
      }
      if (newSalary[i] > maxSal) {
        maxSal = newSalary[i];
      }
      avgSalary += newSalary[i];
    }
    
    return (avgSalary - minSal - maxSal) / (newSalary.length - 2);
  };