# API Automation Training

Welcome to the **API Automation Training**! This repository serves as the foundation for the training, providing a base API Automation Framework and step-by-step guidance for participants to build their API automation skills.

The training is designed for participants to fork this repository, develop their tests for a mock API, and create Pull Requests (PRs) for feedback and review. Mentors will review PRs regularly, providing feedback and guidance to ensure learning and progress.

---

## Training Objectives

1. **Learn the basics of TypeScript**:  
   Understand the fundamental features of TypeScript, including type annotations, interfaces, classes, and asynchronous programming. These concepts will help you write better, more maintainable code for API automation.

2. **Understand the Base Framework**:  
   Familiarize yourself with the provided TypeScript API Automation Framework using Mocha for test execution, Axios for HTTP requests, and Chai for assertions. Learn how the framework is structured and how to extend it for your testing needs.

3. **Learn API Automation Concepts**:  
   Grasp core concepts like service modeling (encapsulating API endpoints), organizing test cases, setting up environments with `.env` files, and strategies for functional and non-functional API testing.

4. **Implement Test Automation**:  
   Use the base framework to write tests for real-world scenarios using the [CatCafeProject API](https://github.com/CodingRainbowCat/CatCafeProject). Implement robust, maintainable test scripts for CRUD operations and edge cases.

5. **Collaborate Effectively**:  
   Develop skills in using Git workflows for version control. Create feature branches, submit Pull Requests (PRs), and respond to feedback from mentors. Learn best practices for working in an asynchronous environment while maintaining high-quality contributions.

---

## Workflow and Guidelines

1. **Fork the Repository**: Fork this repo to your GitHub account and create a local clone.
2. **Add collaborators**: Add your mentors as collaborators to the repo.
3. **Branching**: Use feature branches (e.g., `feature/milestone-1`) for your changes.
4. **Pull Requests**: Create PRs for each milestone. Include a description of your changes and any challenges faced. Add your mentor as a reviewer.
5. **Code Reviews**: Mentors will review your PRs on demand, providing feedback.
6. **Feedback**: Address feedback promptly and resubmit your PR.

---

## Training Milestones

Before starting each milestone, create a feature branch with the name of the milestone, e.g.: `feature/milestone-1`
Follow each Milestone without reading the next one.

### **Milestone 1: Learn the Basics of TypeScript**

**Objective**: Gain a foundational understanding of TypeScript to support API automation.

1. Complete an online TypeScript course:
   - Follow the [TypeScript Basics Course](https://learning.oreilly.com/course/ultimate-typescript-course/9781837027019/) to learn key concepts.
2. Create a folder named `typescript-course` in your repository.
3. Add the completion certificate to the `typescript-course` folder.
4. Download the [course code](https://github.com/PacktPublishing/Ultimate-TypeScript-Course-2024-All-in-Learn-Build-and-Excel) and extract the `Section 4\typescript_project_class_final` folder to your `typescrypt-course` folder.
5. Open the copied course code in Visual Studio Code and make a couple of improvements:
   - Make the box ID unique even when you have pressed the button more than once.
   - Create a second button to restart the game so you don't have to refresh the page each time you lose.

**Deliverable**:

- Create a PR with the `typescript-course` folder containing your improved code and the completion certificate.
- Include a brief summary in the PR description highlighting the topics you covered and any challenges you faced.

---

### **Milestone 2: Setup and Explore. Service model creation and first tests**

**Objective**: Set up the framework and understand its structure. Create a service model with methods for the **Cat** service.

1. Move to the framework folder:
   ```bash
    cd framework
    ```
2. Install dependencies and set up your environment:
    
    ```bash
    npm install
    copy example.env .env
    ```
3. Update .env with the test API base URL:
    ```yaml
    BASEURL=http://localhost:3000/api
    ```
4. Explore the framework:
    - Read the [API Automation Framework (TS+Mocha)](framework/README.md) Readme.
    - Understand the `ServiceBase` class and its usage in service models.
	
5. Create a new `CatService` extending `ServiceBase`.
6. Implement methods in `CatService` for the following operations:
    - `GET /cats`
    - `POST /cats`
    - `GET /cats/{catId}`
    - `DELETE /cats/{catId}`
    - `PATCH /cats/{catId}`
    - `PUT /cats/{catId}`
7. Add request and response models where appropriate.
8. Write the **first test** for the following main scenario:
   - Create a cat and validate the response (`POST /cats`).

**Deliverable**:

- Create a PR with the change, adding a short description of your implementation process.

---

### **Milestone 3: CI/CD Pipeline**

**Objective**: Configure and understand the GitHub Action to run tests on each PR and merge to `main`.

1. If you are not familiar with GitHub Actions, do some research to understand the basics, such as workflows, jobs, and steps. Refer to the [GitHub Actions Documentation](https://docs.github.com/en/actions).
2. Explore the `.github/workflows/main.yml` file to understand the workflow triggers and steps.
3. Based on the research you did on Github Actions and your experience runing the tests in Visual Code, add the missing line in the main.yml file so the tests are run in the pipeline.
4. Create a new environment called "Testing" in **Settings** > **Environments** > **New environment**
5. Configure the `BASEURL` as an environment variable with value: `https://petstore.swagger.io/v2`

**Deliverable**:

- Create a PR with a summary of what you learned and confirm that the workflow ran successfully in the Actions tab.

---

### **Milestone 4: Complete the Create Cat Suite**

**Objective**: Write some tests for the rest of the Create Cat test Suite.

1. Write some additional tests for the Create Cat (`POST /cats`) endpoint.
2. Include positive and negative tests.
3. Use tags like `@Smoke` or `@Regression` for test categorization. `@Smoke` tests should be the ones that are absolutely required to pass.
4. In case a test fails due to a bug in the API, make sure to create the bug in the Issues tab and follow the [Bug Management documentation](https://github.com/damianpereira86/api-automation-training/tree/main/framework#bug-management).

**Deliverable**:

- Create a PR with the tests and a brief summary of the scenarios covered.

---

### **Milestone 5: Verify the cat was created**

**Objective**: Make a request to the get cat endpoint to verify the cat was actually created.

Note: some test APIs out there use mocked data to return the same thing you sent on the body and don't actually create your object. For this reason, if you only assert against the response, your tests might pass even when the feature is not actually working. This is why is so important to verify the resources were actually created.
In this case, the API actually stores the data and you won't see any change in the results either if you only check the response or if you call the get method, but in order to test it the right way:

1. For your positive tests, after the response assertions, obtain the created order ID from the response
2. Make a request to the `GET /cats/{catId}` endpoint with the cat ID
3. Verify that the response of the Get Cat endpoint is 200, hence, the order was created successfully.

**Deliverable**:

- Create a PR with the tests and a brief summary of the changes.

---

### **Milestone 6: Create Test Suites for the rest of the Cat Service**

**Objective**: Write tests for the rest of the Cat Service following the practices covered above.

1. Write a test suite for each of the remaining endpoints in the Cat Service:
    - `GET /cats`
    - `GET /cats/{catId}`
    - `DELETE /cats/{catId}`
    - `PATCH /cats/{catId}`
    - `PUT /cats/{catId}`

**Deliverable**:

- **For each test suite**, create a PR with the tests and a brief summary of the scenarios covered.

---

### **Milestone 7: Pre and Post conditions: Hooks**

**Objective**: Write hooks for pre and post-conditions.

1. Write a [before hook](https://mochajs.org/#hooks) in the Get Cat test suite.
   1. Add a Before hook that creates a cat by calling the right method in the CatService model.
   3. Obtain and store the catId (the variable for this must be declared above the before hook).
   4. Use the saved catId in the Get Cat test.
2. Write an after each hook in the Create Cat test suite. This is very useful for cleaning up data after a test execution.
   1. After every positive test, update the catId variable with the newly created Cat ID.
   2. Add an AfterEach hook that deletes the created cat by calling the right method in the CatService model. 

**Deliverable**:

- Create a PR with the changes and a brief summary. 

---

### **Milestone 8: Verify endpoints basic Performance**

**Objective**: Expand the test suite with basic performance test cases.

1. Add performance checks for the endpoints (e.g., response time < 1000ms).

**Deliverable**:

- Create a PR with the new tests and details covered.

---

### **Milestone 9: Extend to Other Services**

**Objective**: Implement automation for additional services (`Staff` and `Adopter`).

1. Repeat the previous steps for **Staff** and **Adopter** services.
Note that your tests for the Staff service will fail with a 401. This will get solved on next Milestone. You can mark them to be skipped in the meantime.

**Deliverable**:

- Create separate PRs for each suite across both services.

---

### **Milestone 10: Authentication**

**Objective**: Implement the authenticate method.

1. Go to the ServiceBase class and find the example `authenticate` method.
2. Read the method and the [documentation](https://github.com/damianpereira86/api-automation-training/tree/main/framework#authentication) to understand what it does. 
3. Remove the skip notation in your Staff tests.
4. Use the authentication method in your Staff tests to make them pass.
   1. Add the USER and PASSWORD environment variables to the .env file with values: USER=admin; PASSWORD=password
   2. Modify the tests to call the authenticate method from a before hook to get the config with the auth header.
   3. Send the config in all your Staff related calls to the StaffService methods.

**Deliverable**:

- Create a PR with the Staff endpoints now passing.

---

## Schedule and Communication

- **Weekly Reviews**: Mentors will provide feedback and approval for completed milestones.
- **Support Channels**: Chat with your mentors for queries and discussions.

---

## Tips for Success

1. **Engage Actively**: Reach out for help if you're stuck or need clarification.
2. **Focus on Quality**: Write clean, maintainable code and meaningful tests.
3. **Learn from Feedback**: Incorporate mentor feedback to refine your implementation.

---
