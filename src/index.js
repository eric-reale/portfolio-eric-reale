const buttons = document.querySelectorAll('button');

function hover(e) {
  e.currentTarget.classList.add('hover');
}

function removeHover(e) {
  e.currentTarget.classList.remove('hover');
}

buttons.forEach(button => button.addEventListener('mouseover', hover))
buttons.forEach(button => button.addEventListener('mouseout', removeHover))

// console.log(`
//     #     #      #######                             ###
//     #     # #       #    #    # ###### #####  ###### ###
//     #     # #       #    #    # #      #    # #      ###
//     ####### #       #    ###### #####  #    # #####   #
//     #     # #       #    #    # #      #####  #
//     #     # #       #    #    # #      #   #  #      ###
//     #     # #       #    #    # ###### #    # ###### ### `);
// console.log('This website was built by Eric Reale.');
