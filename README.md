# API Automation Training

Welcome to the **API Automation Training**! This repository serves as the foundation for the training, providing a base API Automation Framework and step-by-step guidance for participants to build their API automation skills.

Find the the API Framework documentation [here](framework/README.md).

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
   Use the base framework to write tests for real-world scenarios using the [Petstore API](https://petstore.swagger.io/). Implement robust, maintainable test scripts for CRUD operations and edge cases.

5. **Collaborate Effectively**:  
   Develop skills in using Git workflows for version control. Create feature branches, submit Pull Requests (PRs), and respond to feedback from mentors. Learn best practices for working in an asynchronous environment while maintaining high-quality contributions.

---

## Workflow and Guidelines

1. **Fork the Repository**: Fork this repo to your GitHub account and create a local clone.
2. **Add collaborators**: Add your mentors as colalborators to the repo.
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
   - Create a second button to restart the game so you don't have to refresh the page each time you loose.

**Deliverable**:

- Create a PR with the `typescript-course` folder containing your improved code and the completion certificate.
- Include a brief summary in the PR description highlighting the topics you covered and any challenges you faced.

---

### **Milestone 2: Setup and Explore**

**Objective**: Set up the framework and understand its structure. Start creating a service model for the **Store** service.

1. Move to the framework folder
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
    BASEURL=https://petstore.swagger.io/v2
    ```
4. Explore the framework:
    - Read the [API Automation Framework (TS+Mocha)](https://github.com/damianpereira86/api-automation-training/tree/main/framework#readme) Readme.
    - Understand the `ServiceBase` class and its usage in service models.
	
5. Create a new `StoreService` extending `ServiceBase`.

**Deliverable**:

- Create a PR with the change, adding a short description of your setup process and addition.

---

### **Milestone 3: Methods implementation and first test**

**Objective**: Create service models for the **Store** service.

1. Implement methods in `StoreService` for the following operations:
    - `GET /store/inventory`
    - `POST /store/order`
    - `GET /store/order/{orderId}`
    - `DELETE /store/order/{orderId}`
2. Add request and response models where appropriate.
3. Write the **first test** for the following main scenario:
   - Create an order and validate the response (`POST /store/order`).

**Deliverable**:

- Create a PR with the changes adding a description of your implementation process.

---

### **Milestone 4: CI/CD Pipeline**

**Objective**: Configure and understand the GitHub Action to run tests on each PR and merge to `main`.

1. Explore the `.github/workflows/main.yml` file to understand the workflow triggers and steps.
2. If you are not familiar with GitHub Actions, do some research to understand the basics, such as workflows, jobs, and steps. Refer to the [GitHub Actions Documentation](https://docs.github.com/en/actions).
3. Configure the `BASEURL` variable in **Settings** > **Secrets and variables** > **Actions** > **Variables** with: `https://petstore.swagger.io/v2`

**Deliverable**:

- Create a PR with a summary of what you learned and confirm that the workflow ran successfully in the Actions tab.

---

### **Milestone 5: Complete the Create Order Suite**

**Objective**: Write tests for the rest of the Create Store test Suite.

1. Write additional tests for the Create Store (`POST /store/order`) endpoint.
2. Include positive and negative tests.
3. Use tags like `@Smoke` or `@Regression` for test categorization. `@Smoke` tests should be the ones that are absolutely required to pass.
4. In case a test fails due to a bug in the API, make sure to create the bug in the Issues tab and follow the [Bug Management documentation](https://github.com/damianpereira86/api-automation-training/tree/main/framework#bug-management).

**Deliverable**:

- Create a PR with the tests and a brief summary of the scenarios covered.

---

### **Milestone 6: Verify the order was created**

**Objective**: Make request to the get order endpoint to verify the order was actually created.

In case you didn't already noticed, the Create Order endpoint does not actually create an order (all the data is mocked). For this reason, if you only asserted against the response, your positive tests should have passed. This is why is so important to verify the resources were actually created.

1. For the positive tests from Milestone 5, after the response assertions, obtain the created order ID from the response
2. Make a request to the `GET /store/order/{orderId}` endpoint with the order ID
3. Verify the response of the Get Order endpoint is 200, hence, the order was created successfully.
4. Since the test should fail, follow step 4 in Milestone 5 for handling it.

**Deliverable**:

- Create a PR with the tests and a brief summary of the changes.

---

### **Milestone 7: Create Test Suites for the rest of the Store Service**

**Objective**: Write tests for the rest of the Store service following the pracices covered above.

1. Write a tests suite for each of the remaining endpoints in the Store Service:
    - `GET /store/inventory`
    - `GET /store/order/{orderId}`
    - `DELETE /store/order/{orderId}`

**Deliverable**:

- **For each test suite**, create a PR with the tests and a brief summary of the scenarios covered.

---

### **Milestone 8: Pre and Post conditions: Hooks**

**Objective**: Write hooks for pre and post conditions.

Note: Since this is a mock API, there are some scenarios that will not work, such as creating an order to use it in the Get Order tests. 

1. Write a [before hook](https://mochajs.org/#hooks) in the Get Order test suite.
   1. Add a Before hook that creates an order by calling the right method in the StoreService model.
   3. Obtain and store the order ID (the variable for this must be declared above the before hook).
   4. Use the saved Order ID in the Get Order test. Note that this step will make the test fail as axplained above.
2. Write an after each hook in the Create Order test suite. This is very useful for cleaning up data after a test execution.
   1. Declare an orderId variable on top of the test suite
   2. After every positive test, update the orderId variable with the newly created Order ID.
   3. Add an AfterEach hook that deletes the created orders by calling the right method in the StoreService model. 

**Deliverable**:

- Create a PR with the changes and a brief summary. 
- Since the Before hook will make the Get Order tests fail, you can comment this method before creating the PR, or setting the fake Order IDs (1-10) after making the Create Order request.

---

### **Milestone 9: Verify endpoints basic Performance**

**Objective**: Expand the test suite with basic performance test cases.

1. Add performance checks for the endpoints (e.g., response time < 1000ms).

**Deliverable**:

- Create a PR with the new tests and details covered.

---

### **Milestone 10: Extend to Other Services**

**Objective**: Implement automation for additional services (`Pet` and `User`).

1. Repeat the previous steps for **Pet** and **User** services.

**Deliverable**:

- Create separate PRs for each suite across both services.

---

### **Milestone 11: Authentication**

**Objective**: Implement the authenticate method.

1. Go to the ServiceBase class and find the example `authenticate` method
2. Read the method and the [documentation](https://github.com/damianpereira86/api-automation-training/tree/main/framework#authentication) to understand what it does. 
3. Modify the authenticate method implementation
   1. Add the USER and PASSWORD environment variables to the .env file
   2. Modify line 46 to call the `GET /user/login` endpoint. Note that this endpoint is a GET, and expects two params instead of a payload as in the example.
   3. Set the obtained Session ID correctly according the API documentation. Check the [Delete Pet](https://petstore.swagger.io/#/pet/deletePet) request for information on how to set the session ID.
   4. Modify the Delete Pet test to call the authenticate method from a before hook.

**Deliverable**:

- Create a PR with the new authenticate method and the modified Delete.

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