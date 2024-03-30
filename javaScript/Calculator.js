// strat calculator

    function calculator() {
            while (true) {
                const masiv = []
                for (i = 0; i < 1; i++) {
                    theFirstNumber = prompt('Enter the first digit', '');

                    if (isNaN(theFirstNumber) || theFirstNumber === '' || theFirstNumber === null) {
                        alert('No detected digits');
                        i--;

                    } 
                    else {
                        convTheFirstNumber = parseFloat(theFirstNumber);
                        masiv[0] = convTheFirstNumber;
                    }
                }
                for (i = 0; i < 1; i++) {
                    operator = prompt('Enter + , - , * , / ', '');
                    if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
                        alert('No detected operator');
                        i--;
                    } else {
                        masiv[1] = operator;
                    }
                }
                for (i = 0; i < 1; i++) {
                    theSecondNumber = prompt('Enter the second digit', '');
                    if (isNaN(theSecondNumber) || theSecondNumber === '' || theSecondNumber === null) {
                        alert('No detected digits');

                        i--;
                    } else {
                        convTheSecondNumber = parseFloat(theSecondNumber);
                        masiv[2] = convTheSecondNumber;
                    }


                }

                if (masiv[1] === '+') {

                    result = masiv[0] + masiv[2];
                    alert(`Result: ${result}`);
                    for (i = 0; i < 1; i++) {
                        endWork = prompt('We continue? (yes/not)', '');
                        if (endWork !== 'yes' && endWork !== 'not') {
                            alert('Mandatory to enter yes or not');
                            i--;
                        }
                    }
                    if (endWork === 'yes') {
                        continue;
                    } else if (endWork === 'not') {
                        alert('To start the application, restart the page');
                        break;
                    }

                }
                if (masiv[1] === '-') {

                    result = masiv[0] - masiv[2];
                    alert(`Result: ${result}`);
                    for (i = 0; i < 1; i++) {
                        endWork = prompt('We continue? (yes/not)', '');
                        if (endWork !== 'yes' && endWork !== 'not') {
                            alert('Mandatory to enter yes or not');
                            i--;
                        }
                    }
                    if (endWork === 'yes') {
                        continue;
                    } else if (endWork === 'not') {
                        alert('To start the application, restart the page');
                        break;
                    }
                }
                if (masiv[1] === '*') {

                    result = masiv[0] * masiv[2];
                    alert(`Result: ${result}`);
                    for (i = 0; i < 1; i++) {
                        endWork = prompt('We continue? (yes/not)', '');
                        if (endWork !== 'yes' && endWork !== 'not') {
                            alert('Mandatory to enter yes or not');
                            i--;
                        }
                    }
                    if (endWork === 'yes') {
                        continue;
                    } else if (endWork === 'not') {
                        alert('To start the application, restart the page');
                        break;
                    }
                }
                if (masiv[1] === '/') {


                    result = masiv[0] / masiv[2];
                    if (result === Infinity) {
                        alert('Error / to 0');
                        for (i = 0; i < 1; i++) {
                            endWork = prompt('We continue? (yes/not)', '');
                            if (endWork !== 'yes' && endWork !== 'not') {
                                alert('Mandatory to enter yes or not');
                                i--;
                            }
                        }
                        if (endWork === 'yes') {
                            continue;
                        } else if (endWork === 'not') {
                            alert('To start the application, restart the page');
                            break;
                        }


                    } else {
                        alert(`Result: ${result}`);


                        for (i = 0; i < 1; i++) {
                            endWork = prompt('We continue? (yes/not)', '');
                            if (endWork !== 'yes' && endWork !== 'not') {
                                alert('Mandatory to enter yes or not');
                                i--;
                            }
                        }
                        if (endWork === 'yes') {
                            continue;
                        } else if (endWork === 'not') {
                            alert('To start the application, restart the page');
                            break;
                        }


                    }

                }



            }
        }
