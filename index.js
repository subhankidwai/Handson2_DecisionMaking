// Q.1 - Calculator
const Calculator = (A, B, C) => 
{
	switch(A){
	  case "+" :
	    return (B+C);
	  case "-" :
	    return (B-C);
	  case "*" :
	    return (B*C);
	  case "/" :
	    return (B/C);
	}
    
};

// Q.2 - Check whether the condition is fulfilled or not?
const Check_divisibility = (N) => {
    if (N%6==0 && N%9==0)
      return "Divisible by both"
    
    else
      return "Not Divisible by both";
    
      
  };

//   Q.3 - Eligible Voter
const isEligible = (a) => {
    if (a>=18)
      return ("Eligible for Voting")
    else
      return ("Not Eligible for Voting")
};

// Q.4 - Find Relation
const findRelation = (x,y) => {
    if (x<y)
      return x + " is smaller than " + y
    if (x>y)
      return x + " is greater than " + y
    if (x==y)
      return x + " is equal to " + y
  };

// Q.5 - Find Grades
const findGrades = (a) => {
    switch(true){
      case(a<=10):
        return "E"
      case(a>=11&&a<=20):
        return "D"
      case(a>=21&&a<=30):
        return "C"
      case(a>=31&&a<=40):
        return "B"
      case(a>=41&&a<=50):
        return "A"
        
      default:
        return "Invalid Number"   
    }    
  };
  
// Q.6 - Get Value
const getValue = (a) => {
    if (a == "P" || a == "p")
      return "PrepBytes";
    else if (a == "Z" || a == "z")
      return "Zenith";
    else if (a == "E" || a == "e")
      return "Expert Coder";
    else if (a == "D" || a == "d")
      return "Data Structure"
    else 
      return "Invalid Input"
  };
  
// Q.7 - Find the maximum out of three numbers.
const Max_out_of_three = (A,B,C) => {
    if (A>B && A>C)
      return A;
    else if (B>A && B>C)
      return B;
    else if (C>A && C>B)
      return C;
    else
      return -1;

};

// Q.8 - Second Smallest
const findSndSmallest = (x,y,z) => {
    if ((x>y && x<z) || (x>z && x<y))
      return x;
    else if ((y>z && y<x) || (y>x && y<z))
      return y;
    else if ((z>x && z<y) || (z>y && z<x))
      return z;
    else
      return "Invalid"
};

// Q.9 - Check whether the triangle is Acute or Obtuse
const Triangle_Check = (A,B,C) => {
    if ((A<90)&&(B<90)&&(C<90))
      return "acute"
    else if ((A>90)||(B>90)||(C>90))
      return "obtuse"
    else
      return "Invalid"
};

