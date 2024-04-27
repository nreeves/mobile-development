// Create JavaScript function to generate the HTML structure
function generateSkillsItem(skillName, numCheckboxes, checkedIndexes) {
    // Create div element with class 'skills__item'
    const skillsItemDiv = document.createElement('div');
    skillsItemDiv.classList.add('skills__item');
  
    // Create div element with class 'left' and 'name' and append the skill name
    const leftDiv = document.createElement('div');
    leftDiv.classList.add('left', 'name');
    leftDiv.textContent = skillName;
    skillsItemDiv.appendChild(leftDiv);
  
    // Create div element with class 'right'
    const rightDiv = document.createElement('div');
    rightDiv.classList.add('right');
  
    // Loop to create checkboxes based on the given number
    for (let i = 1; i <= numCheckboxes; i++) {
      // Create input element with type 'checkbox'
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.id = `ck${i}`;
  
      // If the checkbox index is in the checkedIndexes array, mark it as checked
      if (checkedIndexes.includes(i)) {
        checkbox.checked = true;
      }
  
      // Create label element and set its 'for' attribute to match the checkbox id
      const label = document.createElement('label');
      label.setAttribute('for', `ck${i}`);
  
      // Append checkbox and label to the 'right' div
      rightDiv.appendChild(checkbox);
      rightDiv.appendChild(label);
    }
  
    // Append 'right' div to the 'skills__item' div
    skillsItemDiv.appendChild(rightDiv);
  
    // Return the generated 'skills__item' div
    return skillsItemDiv;
  }
  
  // Get the container where the skills items will be added
  const skillsContainer = document.querySelector('.skills');
  
  // Call the function to generate the first skills item (Javascript)
  const javascriptSkills = generateSkillsItem('Javascript', 5, [1, 2]);
  // Call the function to generate the second skills item (CSS)
  const cssSkills = generateSkillsItem('CSS', 5, [1, 2]);
  
  // Append the generated skills items to the skills container
  skillsContainer.appendChild(javascriptSkills);
  skillsContainer.appendChild(cssSkills);
  