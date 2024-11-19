function toggleTasks(level) {
  const tasks = document.getElementById(level);

  // Check if the tasks are already visible
  if (tasks.style.display === "block") {
    tasks.style.display = "none"; // Hide tasks
  } else {
    // Fetch tasks from the API
    fetch('http://localhost:3000/tasks/${level}')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching tasks: ${response.status}');
        }
        return response.json();
      })
      .then(data => {
        // Populate tasks dynamically
        tasks.innerHTML = data
          .map(task => '<button>${task}</button>')
          .join('');
        tasks.style.display = "block"; // Show tasks
      })
      .catch(error => {
        console.error("Error:", error);
        tasks.innerHTML = '<p>Error loading tasks. Please try again later.</p>';
        tasks.style.display = "block";
      });
  }
}