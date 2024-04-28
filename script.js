const namesList = [
    { name:"John Doe",age:32,gender:"Male",occupation:"Software Engineer",city:"New York",email:"john.doe@example.com",phone:123-456-7890 },
    { name:"Jane Smith",age:28,gender:"Female",occupation:"Data Analyst",city:"San Francisco",email:"jane.smith@example.com",phone:987-654-3210},
    { name: "David Johnson",age:45,gender:"Male",occupation:"Marketing Manager",city:"Chicago",email:"david.j@example.com",phone:555-123-4567},
    { name:"Emily Brown",age:35,gender:"Female",occupation:"Project Manager",city:"Los Angeles",email:"emily.b@example.com",phone:456-789-1023},
    { name:"Michael Lee",age:40,gender:"Male",occupation:"Financial Analyst",city:"Houston",email:"michael.lee@example.com",phone:789-102-3456},
    { name:"Sarah Miller",age:29,gender:"Female",occupation:"Graphic Designer",city:"Seattle",email:"sarah.m@example.com",phone:321-654-9087},
    { name:"Kevin Wang",age:33,gender:"Male",occupation:"UX Designer",city:"Austin",email:"kevin.w@example.com",phone:987-321-6540}
    // Add more names and details as needed
  ];

  function search() {
    const searchName = document.getElementById("searchInput").value.trim();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear previous search result

    // Find the name in the array
    const foundName = namesList.find(item => item.name.toLowerCase() === searchName.toLowerCase());

    if (foundName) {
      // Display details if name is found
      const table = document.createElement("table");
    table.innerHTML = `<tr><th>Name</th><th>Age</th><th>Gender</th><th>Occupation</th><th>City</th><th>Email</th><th>Phone no</th></tr>
                       <tr><td>${foundName.name}</td><td>${foundName.age}</td><td>${foundName.gender}</td><td>${foundName.occupation}</td><td>${foundName.city}</td><td>${foundName.email}</td><td>${foundName.phone}</td></tr>`;
    resultDiv.appendChild(table);
    } else {
      // Display message if name is not found
      resultDiv.innerHTML = "<p>Name not found</p>";
    }
  }