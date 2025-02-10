class Test {
    constructor(name) {
        this.name = name;
        this.tests = [];
    }

    addTest(versionName, algoName){
        const test = {
            version: versionName,
            algorithm: algoName
        };
        this.tests.push(test);
    }

    iteration(number, versionName, ...params){
        let totalTime = 0;
        for(let i = 0; i < number; i++){
            totalTime += this.run(versionName, ...params);
        }
        return totalTime / number;
    }

    run(versionName, ...params){
        const test = this.tests.find(t => t.version === versionName);
        if (test && typeof test.algorithm === 'function') {
            const start = performance.now();
            test.algorithm(...params);
            const end = performance.now();
            return end - start;
        } else {
            console.error(`Aucune version trouvée pour: ${versionName}`);
            return Infinity;
        }
    }
}

function containsDuplicate(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          return true;
        }
      }
    }
    return false;
  }
  
  function findCommonElements(array1, array2) {
    let commonElements = [];
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          commonElements.push(array1[i]);
        }
      }
    }
    return commonElements;
  }
  
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  Test.addTest('duplicate', containsDuplicate);
  Test.iteration(100, containsDuplicate);