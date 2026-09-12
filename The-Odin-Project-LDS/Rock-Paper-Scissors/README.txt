getComputer as a function
    Declare varialble X as integer of random integer between 1 and 3
    Declare variale Choice as string
    Compare X IF x is 1,2,3 set it to rock paper or scissors accordingly
    End If
    Return choice
End function

getHumanChoice as a function
    Declare choice as string
    promt the user to input rock, paper or scissors
    Set choice to user input value
    return lowercase of choice
End function

convertChoice as a function taking one parameter(choice)
    declare value as integer
    if choice is rock set value to 1
    else if choice is paper set value to 2
    else if choice is scissors set value to 3
    return value
end function

playround as function taking two parameters(humanChoice, computerChoice)
    Call function getHumanChoice
    Call function getComputerChoice
    
    let computer equal to convertChoice taking humanChoice as parameter
    let human equal to convertChoice taking computerChoice as parameter
    declare winnerLabel as string
    declare messageLabel as string
    declare humanComputerFraction equal to human divide by computer
    
End function

playGame as a function 
    loop for 5 rounds
        call playround
    end loop
    compare humanscore and computerscore
    display according win message
end function
    
    