# Live-Test-Taking-System

## FrontEnd Technologies 
- ReactJS
- NextJS
- React MaterialUI
## BackEnd Technologies
- NodeJS
- ExpressJS
- MongoDB
- Socket.io
## Deployment Platform 
- Heroku
- MongoDB Atlas

### Features of the Application
### Roles
- User -> Student
- Admin -> Teacher
#### User Management System 
- User should be able to sign up using email , gmail.

- User should be able to login to the system through email and password
combination or using gmail.

- Forgot password functionality should be there to reset password.

- On successfull signup email will be sent to the user's email address.

- He can set his profile picture by uploading a file or by using camera of his device.

#### User Testing Management System
- Once the user logs into the system, he should see a dashboard containing
the statistics of all tests he has taken. The statistics may include thenumber of tests taken, average score and percentage growth etc. 

- Dashboard should also contain the lists of tests the user has taken and
every item in this list should be clickable. On clicking this item, a Test
Result view should open which contains the details of test result.

- There should be a “take a test” option in menu from which user can go to
test taking page.

- On test taking page, user should see a list of tests he can appear for along
with a button to start that test. 

- If user leaves the test at particular time , next time when he comes timer should start from the same time if the test is still available.

#### User test taking system
- After user starts the test, he should first see an instructions screen
containing. It may also contain the rules and regulations of the test.

- Once the user reads the instructions and accepts the rules (single accept
button), The test timer will start and the screen should display the test
questions and options associated with it.

- User should be able to choose only one option or more than one option  as answer for every
question.

- The test should have a time limit. The test window must automatically
close once the timeout occurs irrespective of how many questions have
been answered. The system should submit the answers automatically.

- If the user completes the test before the time ends, he should see a
submit window which will submit his all answers. In case of timeouts, this
window must appear automatically.

- On submission of test, we will show the result to student.

### Test listing Admin
- Admin should be able to create tests in the system

- Each test should have a set of questions, each question containing at
least 4 options and overall time limit of the test.

- Admin should be able to create, edit, delete and view any tests, question
or option.

- While creating options for any question, admin should be able to set a
correct answer. This answer (flag) will actually help in automating the test
evaluation process.

- Admin should be able to view details of users registered in the system

- Admin should be able to view overall performance of the user in all his
tests.

### Advance Features
- Admin should be able to see how many total students are currently taking the test in real time.

- On exams where we have made compulsory for the students to share their webcamera.A kind of proctoring feature should be included here.

- Admin should be able to block the system of a particular student if he founds he is cheating in the exam .In this case a pop up will appear on the user's screen if he is blocked.
