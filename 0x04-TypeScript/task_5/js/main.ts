// task_5/js/main.ts

interface MajorCredits {
    credits: number;
    __brand: 'major';
  }
  
  interface MinorCredits {
    credits: number;
    __brand: 'minor';
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      __brand: 'major',
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      __brand: 'minor',
    };
  }
  
  // Example usage
  const majorSubject1: MajorCredits = { credits: 3, __brand: 'major' };
  const majorSubject2: MajorCredits = { credits: 4, __brand: 'major' };
  const resultMajor = sumMajorCredits(majorSubject1, majorSubject2);
  console.log('Sum of Major Credits:', resultMajor.credits); // Output: 7
  
  const minorSubject1: MinorCredits = { credits: 2, __brand: 'minor' };
  const minorSubject2: MinorCredits = { credits: 5, __brand: 'minor' };
  const resultMinor = sumMinorCredits(minorSubject1, minorSubject2);
  console.log('Sum of Minor Credits:', resultMinor.credits); // Output: 7
  