console.log(hello('jack')); //執行順序  output

function hello(person) {
  let fullName;
  setTimeout(()=>{
      fullName = `captain ${this.person}`;
      console.log(`this is ${fullName}`)
  }, 0);
  return `return is ${fullName}`;
}


// ----------------------------------------


const family_1 = {
  person: 'joey',
  hi: function(){
      console.log(`hi ${this.person}`)
  },
  welcome: function(){
      setTimeout(function(){
          console.log(`welcome ${this.person}`)
      }, 10);
  },
}

family_1.hi();
family_1.welcome(); 

//ouput


const family_2 = {
  person: 'ian',
  hi: () => {
    console.log(`hi ${this.person}`)
  }
}

family_2.hi(); //ouput ?


// ----------------------------------------
