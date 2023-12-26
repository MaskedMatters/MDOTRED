We also moved this information to the [wiki](https://github.com/MaskedMatters/MDOTRED/wiki) for better readability!

# MDOTRED WIKI - Home

Welcome to the MDOTRED Wiki, your gateway to understanding the inner workings of MDOTRED (aka M.R or MDR or "Matthew Dot Red"). This section aims to provide insights into how MDOTRED is crafted and the objectives it aims to achieve. Developed by Matthew, this scripting language is based on the syntax of C# and implemented using Javascript with a NodeJS Runtime. MDOTRED adopts a syntax that resonates with the preferences of its creator, Matthew.

### Overview

MDOTRED is a scripting language that merges the familiar syntax of C# with the flexibility of Javascript, all within the NodeJS Runtime environment. The language is affectionately known as "Matthew Dot Red" or simply M.R. It's designed to offer a coding experience that aligns with the developer's preferences while harnessing the power of widely-used technologies.

### Example: Calculator Application

Let's delve into a practical example to get a sense of MDOTRED's syntax. Below is an excerpt showcasing a simple calculator application:

<details>
  <summary>EXAMPLE: Calculator Application</summary>

  ```csharp
  // Calculator Application

  bool shellRunning = true;

  func checkOperator(str command) {
      forin (char c in command) {
          if (c == "+")
              return 0;
          else if (c == "-")
              return 1;
          else if (c == "*")
              return 2;
          else of (c == "/")
              return 3;
          else
              break;
      }

      return 4;
  }

  func operate(int operator) {
      // Implementation details go here

  while (shellRunning) {
      IO.Output("Two Operator Calculator ONLY!!\n")

      IO.Output("> ");
      command = IO.Input();

      // Additional logic would be implemented here
  ```
  _The code snippet is presented in a C# code block for syntax highlighting._

</details>

In this example, you can observe the C#-inspired syntax used within the MDOTRED scripting language. The script initializes a boolean variable, `shellRunning`, to control the execution flow. Functions like `checkOperator` and `operate` showcase the language's structure and the potential for abstraction.

It's important to note that this is just a glimpse into MDOTRED's capabilities. The language, with its unique blend of syntax and features, enables developers like Matthew to express their ideas efficiently.

Feel free to explore the rest of the MDOTRED Wiki to gain a deeper understanding of the language and discover its diverse applications. Happy coding with MDOTRED!

# How to Contribute

To log an issue visit our [Issue Tracker](https://github.com/MaskedMatters/MDOTRED/issues) and use the corresponding tag so we can prioritize the issues. You can also contribute to this project by forking it and making a pull request at the [Pull Request](https://github.com/MaskedMatters/MDOTRED/pulls) page. If you are a frequent contributor to the project you can request to become a member by commenting with tag "reqmember"
