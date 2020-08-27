const randomXToY =(minVal,maxVal) => {
    var randVal = minVal+(Math.random()*(maxVal-minVal));
    return Math.round(randVal);
  }
  const makeGender = gender => {
      if(gender === 'F' || gender ===  'M')
          return gender    
      else return Math.random() > 0.5 ? 'M' : 'F'
  }
  const makeAge = age =>{
      if(age >= 0 && age <= 90)
          return age
      else return randomXToY(0,90)
  }
  function validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }
  const makeEmail = (email, gender, age) =>{
      if(validateEmail(email))
          return email
      else
      {
          const db = require('./db/db');
          const fNames =  db.fNames.split(`\n`)
          const mNames =  db.mNames.split(`\n`)
          return gender === 'M' ? mNames[randomXToY(0,999)] + (2020 - age) + '@gmail.com': fNames[randomXToY(0,999)] + (2020 - age) + '@gmail.com'
      } 
  }
  
  const makeRandomUser = (gender = '', age = -1, email = '') =>{
      gender = makeGender(gender)
      age = makeAge(age)
      email = makeEmail(email, gender, age)
      return {
          'init' : 'http:localhost:3000/randomUser?email=' + email
      }
  }
  
  console.log(makeRandomUser())