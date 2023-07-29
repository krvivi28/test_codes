let empList = [];
const htmlList = document.getElementById("objectList");
const renderData = async () => {
  // Please don't change the pre-written code
  // Write your code here

  empList.forEach((obj) => {
    const listItem = document.createElement("li");
    listItem.innerText = `ID: ${obj.emp_id}, Name: ${obj.name}, Category: ${obj.company}`;
    htmlList.appendChild(listItem);
  });
};
renderData();
