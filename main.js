const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')


let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: "It is April 11, 1970. You have just left the Kennedy Space Center. It will take around three days before the command module lands on the moon. Until then, just relax and learn your way around the ship." ,
    options: [
      {
        text: 'Get to Know Your Crew Members',
        nextText: 2
      },
      {
        text: "Eat", 
        nextText: 6
      },
      {
        text: "Exercise",
        nextText: 11
      }, 
      {
        text: "Continue on to next day...",
        nextText: 12
      }
    ]
  },
  {
    id: 2, 
    text: "Let's meet everyone!",
    options: [
      {
        text: "James Lovell",
        nextText: 3
      },
      {
        text: "Jack Swigert",
        nextText: 4
      }, 
      {
        text: "Fred Haise",
        nextText: 5
      },
      {
        text: "Back", 
        nextText: 1
      }
    ]
  },
  {
    id: 3, 
    text: "Name: James [Jim] Lovell. Role: Commander. Age: 42. He used to be a naval aviator and has had 572 hours in space, making him the astronaut with the most time spent in space as of this mission.",
    options: [
      {
      text: "Continue",
      nextText: 2
      }
    ]
  },
  {
    id: 4, 
    text: "Name: Jack Swigert. Role: Command Module Pilot. Age: 38. He served in the Air Force and used to be an engineering test pilot.",
    options: [
      {
        text: "Continue",
        nextText: 2
      }
    ]
  }, 
  {
    id: 5, 
    text: "Name: Fred Haise. Role: Lunar Module Pilot. Age: 35. He was a fighter pilot for the Marine Corps and used to be a research pilot for NASA.", 
    options: [
      {
        text: "Continue",
        nextText: 2
      }
    ]
  },
  {
    id: 6,
    text: "It's important to stay properly fueled. Go and eat something. Look at all these options~",
    options: [
      {
        text: "Beef and Vegetables",
        nextText: 7
      },
      {
        text: "Pork with Potato Scallops",
        nextText: 8
      },
      {
        text: "Bacon and Apple Sauce",
        nextText: 9
      },
      {
        text: "Continue", 
        nextText: 1
      }
    ]
  }, 
  {
    id: 7, 
    text: "You eat your beef and vegetables out of its plastic package. Not bad. Here's some hot water to wash it down.",
    options: [
      {
        text: "Need to go to the bathroom?",
        nextText: 10
      },
      {
        text: "Continue", 
        nextText: 6
      }
    ]
  }, 
  {
    id: 8,
    text: "You eat your pork and potatoes out of their package. It's mushy but pretty decent. Here's some more hot water to wash it down.",
    options: [
      {
        text: "Is your meal not sitting right?",
        nextText: 10
      },
      {
        text: "Continue",
        nextText: 6
      }
    ]
  }, 
  {
    id: 9, 
    text: "BACON!!! You eat your food out of its package. Mmm...and here's some hot water to wash it down.",
    options: [
      {
        text: "Bathroom?",
        nextText: 10
      },
      {
        text: "Continue", 
        nextText: 6
      }
    ]
  },
  {
    id: 10, 
    text: "Well, that's uncomfy....You go do your business. Liquids go into a refief tube and solids go into a specially designed plastic baggie. All of this will be dumped into space later :D",
    options: [
      {
        text: "Continue", 
        nextText: 1
      }
    ]
  },
  {
    id: 11, 
    text: "You do sit-ups, bicep curls, and hamstring stretches for 20 minutes using the Exer-Genie. You feel pretty good now. :D",
    options: [
      {
        text:"Continue",
        nextText: 1
      }
    ]
  },
  {
    id: 12,
    text: "Mission Day One Successfully Completed. Go ahead and rest in your moon hammock. See you tomorrow",
    options: [
      {
        text: "Back",
        nextText: 1
      },
      {
        text: "Sleep",
        nextText: 13
      }
    ]
  },
  {
    id: 13,
    text: "It is Day 2 of the Apollo 13 mission. It's going to be like any normal day.",
    options: [
      {
        text: "Work", 
        nextText: 19
      },
      {
        text: "Learn a fun fact about the Apollo 13",
        nextText: 20
      },
      {
        text: "Exercise",
        nextText: 21
      },
      {
      text: "Continue to next day.",
      nextText: 14
      }
    ]
  },
  {
    id: 14,
    text: "You overhear your crewmate Joe laughing. 'We're bored to tears down here.' Haha, yeah.",
    options: [
      {
        text: "Back",
        nextText: 13
      },
      {
        text: "Hit the moon hammock.",
        nextText: 15
      }
    ]
  },
  {
    id: 15, 
    text: "It's Day Three of Apollo 13. The ship will land on the moon shortly.",
    options: [
      {
        text: "Learn another fun fact about Apollo 13.",
        nextText: 22
      },
      {
        text: "Record video broadcast",
        nextText: 16
      }, 
      {
        text: "Back",
        nextText: 14
      }
    ]
  }, 
  {
    id: 16, 
    text: "You and your crew do a TV broadcast showing everyone how comfortable you are. You show them your packaged food, your exercise equiment, and what you use to go to the bathroom! Yes, such luxury...",
    options: [
      {
        text: "Back",
        nextText: 15
      },
      {
        text: "Commander Jim Lovell has one final statement...",
        nextText: 17
      }
    ]
  }, 
  {
    id: 17, 
    text: "'This is the crew of Apollo 13 wishing everbody there a nice evening, and we're just about ready to close out our inspection of Aquarius and get back for a pleasant evening in Odyssey. Good night.'",
    options: [
      {
        text: "Back",
        nextText: 16
      },
      {
        text: "Continue",
        nextText: 18
      }
    ]
  },
  {
    id: 18, 
    text:"Great job everyone! We are currently 200,000 miles away from Earth! Crew members, please activate the routine stir in the oxygen tanks.",
    options: [
      {
        text: "Back",
        nextText: 17
      },
      {
        text: "Yes sir!",
        nextText: 23
      }
    ]
  }, 
  {
    id: 19, 
    text: "You check the equipment, help clean up the ship, and clear out the bathroom bags. Nice job!",
    options: [
      {
        text: "Continue",
        nextText: 13
      }
    ]
  },
  {
    id: 20,
    text: "Fun Fact: The Apollo 13 still holds the world record for the farthest distance reached from Earth by humans. Wow!",
    options: [
      {
        text: "Continue",
        nextText: 13
      }
    ]
  },
  {
    id: 21,
    text: "You use the Exer-Genie to do side bends and stretches. You used it too forcefully though, and now it's too hot to handle.",
    options: [
      {
        text: "Continue",
        nextText: 13
      }
    ]
  },
  {
    id: 22,
    text: "The spacecrafts used for the Apollo 13 mission were Apollo CSM-109 (Apollo command and service module) and Apollo LM-7 (Apollo Lunar Module). They were known as 'Odyssey' and 'Aquarius' respectively.",
    options: [
      {
        text: "Continue",
        nextText: 15
      }

    ]

  },
  {
    id: 23, 
    text: "BANG!!!",
    options: [
      {
        text: "Back",
        nextText: 18
      },
      {
        text: "What was that?!",
        nextText: 24
      }
    ]
  },
  {
    id: 24, 
    text: "WARNING! AN OXYGEN TANK HAS EXPLODED. SECOND OXYGEN TANK IS RAPIDLY DRAINING. TWO FUEL CELLS ARE LOST. MAIN SUPPLY OF ELECTRICITY AND WATER IS GONE. ALL OXYGEN AND POWER WILL DISAPPEAR IN A COUPLE HOURS.",
    options: [
      {
        text: "Back",
        nextText: 23
      },
      {
        text: "Houston, we've had a problem.",
        nextText: 25
      }
    ]
  },
  {
    id: 25, 
    text: "Key Advice: Focus on the problem. Panicking will not help you.",
    options: [
      {
        text: "Back",
        nextText: 24
      },
      {
        text: "Continue",
        nextText: 26
      }
    ]
  }, 
  {
    id: 26, 
    text: "New Objective: Make it safely back to Earth in three days. Shut down the command module and use the Lunar Module Aquarius as a lifeboat to loop around the moon and return home.",
    options: [
      {
        text: "Back",
        nextText: 25
      },
      {
        text: "Continue",
        nextText: 27
      }
    ]
  }, 
  {
    id: 27, 
    text: "You are now inside the Lunar Module...and there are some problems of their own...",
    options: [
      {
          text: "It's c-cold...",
          nextText: 28
      },
      {
        text: "Water, please...",
        nextText: 29
      },
      {
        text: "*cough cough*",
        nextText: 30
      },
      {
        text: "Pray for survival",
        nextText: 31
      },
      {
        text: "Back",
        nextText: 26
      }

    ]
  },
  {
    id: 28, 
    text: "In the Lunar Module, power had to be conserved to last from 45 hours to 90. Thus, energy consumption was reduced to 20%, including heat.",
    options: [
      {
        text: "Continue",
        nextText: 27
      }
    ]
  },
  {
    id: 29, 
    text: "There was a shortage of water, so consumption had to be reduced to 6 ounces per day. Dehydration was unavoidable...",
    options: [
      {
        text: "Continue",
        nextText: 27
      }
    ]
    
  },
  {
    id: 30, 
    text: "Carbon dioxide levels in the Lunar Module were getting fatally high. Astronauts had to build CO2 filters using the few materials they had. They were sent instructions, courtesy of Mission Control.",
    options: [
      {
        text: "Continue",
        nextText: 27
      }
    ]
  },
  {
    id: 31, 
    text: "April 17, 1970. You and the astronauts are almost home. There is just one thing left...you all have to re-enter the Command Module Odyssey. After all, it is the only spacecraft with a heat shield that could prevent you from being burned alive as you plunge back into Earth. Would the heat shield fail, though? Additionally, are the parachutes necessary to land still even intact?",
    options: [
      {
        text: "Back",
        nextText: 27
      },
      {
        text: "Continue",
        nextText: 32
      }
      
    ]
  },
  {
    id: 32, 
    text: "You hesitantly enter the freezing, flooded Odyssey. You and a couple others immediately begin powering it up...",
    options: [
      {
        text: "Back",
        nextText:31
      },
      {
        text: "Continue",
        nextText:33
      }
    ]
  },
  {
    id: 33, 
    text: "Commander Lovell smiles, 'Gentlemen, I suggest you get ready for a ride.'",
    options: [
      {
        text: "Back",
        nextText: 32
      },
      {
        text: "Tighten your seatbelt-",
        nextText: 34
      }
    ]
  }, 
  {
    id: 34, 
    text: "You feel the water that flooded the spacecraft pour on your face as you shoot 25,000 miles per hour back to Earth.",
    options: [
      {
        text: "Back",
        nextText: 33
      },
      {
        text: "Continue",
        nextText: 35
      }
    ]
  }, 
  {
    id: 35, 
    text: "Glancing out the window, all you can see is a violent, blazing vermillion.",
    options: [
      {
      text: "Back",
      nextText: 34
      },
      {
        text: ". . .",
        nextText: 36
      }
    ]
  },
    {
      id: 36, 
      text: ". . . . .",
      options: [
        {
          text: ". . .",
          nextText: 37 
        }
      ]
    },
    {
      id: 37,
      text: ". . . . . .",
      options: [
        {
          text: ". . .",
          nextText: 38
        }
      ]
    }, 
    {
      id: 38, 
      text: ". . . . . . .",
      options: [
        {
          text: ". . .",
          nextText: 39
        }
      ]
    }, 
    {
      id: 39, 
      text: ". . . . . . . .",
      options: [
        {
          text: ". . .",
          nextText: 40
        }
      ]
    },
    {
      id: 40, 
      text: "'Pop!' goes the parachute as the ship begins to drift down",
      options: [
        {
          text: "Continue",
          nextText: 41
        }
      ]
    },
    {
      id: 41, 
      text: "You smile in relief as you see the familiar, bright blue sky...",
      options: [
        {
          text: "Continue",
          nextText: 42
        }
      ]
    }, 
    {
      id: 42, 
      text: "As the ship gently splashes into the South Pacific ocean, your commander breathes mutual a sigh of relief...",
      options: [
        {
          text: "Continue",
          nextText: 43
        }
      ]
    }, 
    {
      id: 43, 
      text: "'Fellows...we're home.'",
      options: [
        {
          text: "Continue",
          nextText: 44
        }
      ]
    }, 
    {
      id: 44, 
      text: "Congratulations on making it through the 5-day Apollo 13 Mission! Your mission was deemed a 'successful failure!' Landing on the moon though...that's being passed onto Apollo 14 :)",
      options: [
        {
          text: "Finish Adventure",
          nextText: 45
        }
      ]
    },
    {
      id: 45, 
      text: "You have finished the simulation. The crew aboard the Apollo 13 had to make some very decisive decisions in a very quick amount of time.",
      options: [
        {
          text: "Restart Simulation",
          nextText: 1
        }
      ]
    }
    

  

]

startGame()