+++
title = "Power Platform CI/CD with Azure DevOps"
subtitle = "From Manual Deployment to Production Pipelines"
description = "A full-day workshop for the Data & Automation Team on building CI/CD pipelines for the Power Platform."
outputs = ["Reveal"]
[reveal_hugo]
custom_theme = "css/techTweedieLight.css"
margin = 0.1
highlight_theme = "github"
transition = "convex"
transition_speed = "default"
slide_number = true
controlsTutorial = true
controls = true
center = false
touch = true
draft = false
[logo]
src = "/images/dat-logo.png"
alt = "DAT Workshop"
width = "100px"
+++

<style>
:root {
  --primary-color: #4B514F;
  --secondary-color: #3666FF;
  --accent-color: #742774;
  --success-color: #0D7F41;
  --info-color: #243A5E;
  --warning-color:rgb(0, 0, 0);
  --r-link-color: #3666FF;
  --r-link-color-hover: #742774;
  --r-selection-background-color: rgba(54, 102, 255, 0.3);
}
.reveal {
  font-family: "Segoe UI", "Segoe UI Symbol", "Segoe UI Emoji", "Segoe UI Historic", Tahoma, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.reveal h1, .reveal h2, .reveal h3, .reveal h4, .reveal h5, .reveal h6 {
  font-family: "Segoe UI", "Segoe UI Symbol", "Segoe UI Emoji", "Segoe UI Historic", Tahoma, "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--secondary-color);
}
.reveal h1, .reveal h2 {
  font-family: "Segoe UI Semibold", "Segoe UI", "Segoe UI Symbol", "Segoe UI Emoji", "Segoe UI Historic", Tahoma, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 600;
}
.reveal h1 {
  color: var(--accent-color);
}
.reveal h1 .info-word,
.reveal h2 .info-word {
  color: var(--info-color);
}
.reveal h1 .accent-word,
.reveal h2 .accent-word {
  color: var(--accent-color);
}
.reveal a {
  color: var(--secondary-color);
}
.reveal a:hover {
  color: var(--accent-color);
}
.reveal strong, .reveal b {
  color: var(--warning-color);
}
.reveal em, .reveal i {
  color: var(--accent-color);
}
.container{
    display: flex;
}
.col{
    flex: 1;
}
.highlight-box {
    background-color: rgba(54, 102, 255, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-left: 5px solid var(--secondary-color);
}
.demo-box {
    background-color: rgba(13, 127, 65, 0.1);
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    border-left: 5px solid var(--success-color);
}
.warning-box {
    background-color: #FFF3CD;
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    border-left: 5px solid #ffc107;
}
</style>

<!-- Workshop Overview -->
---
<section>
  <h1>Power Platform CI/CD with Azure DevOps</h1>
  <h2>From Manual Deployment to Production Pipelines</h2>
  <br>
  <h4>A Data & Automation Team Workshop</h4>
  <br>
  <p><strong>Facilitators:</strong> Parvez Ghumra & Ian Tweedie</p>
</section>

---
<!-- Before the Session (Instructor Only) -->
<section>
  <h2>Before the Session (Instructor Only)</h2>
  <!-- 
    This section is for instructor preparation.
    It should not be shown to participants.
  -->
</section>

----
<section>
  <h3>Azure DevOps Setup</h3>
  <ul>
    <li>Ensure the primary Azure DevOps org has paid parallel jobs enabled.</li>
    <li>Maintain a separate org with <strong>no parallelism</strong> for the "Failure First" exercise.</li>
    <li>Verify instructor accounts have Project Collection Administrator rights.</li>
  </ul>
  <!-- 
    Notes: The 'no parallelism' org is critical for demonstrating a common pipeline failure scenario.
    Check billing is active on the main org a week before the workshop.
  -->
</section>

----
<section>
  <h3>Power Platform Prep</h3>
  <ul>
    <li>Create a simple "Template Solution" (e.g., one table, one app).</li>
    <li>Create a "Keep-Alive Solution" to prevent environment hibernation.</li>
    <li>Pre-install the template solution in each participant's DEV environment.</li>
  </ul>
  <!-- 
    Notes: The keep-alive solution can be a simple scheduled flow that runs daily.
    This avoids delays on the day of the workshop.
  -->
</section>

----
<section>
  <h3>Participant Setup</h3>
  <ul>
    <li>Create one user account per attendee.</li>
    <li>Assign a "Power Platform Developer" license to each user.</li>
    <li>Provision three environments per user: <strong>Dev</strong>, <strong>Test</strong>, <strong>Prod</strong>.</li>
    <li>Add users as Team Members to the Azure DevOps project.</li>
  </ul>
  <!-- 
    Notes: Use a script for user and environment creation to save time.
    Double-check permissions the day before.
  -->
</section>

---
<!-- Pre-Workshop (1-4 Days Before) -->
<section>
  <h2>Pre-Workshop Comms</h2>
</section>

----
<section>
  <h3>Participant Checklist (1-4 Days Before)</h3>
  <ul>
    <li><strong>Email 1: Introduction & Setup</strong>
      <ul>
        <li>Welcome message</li>
        <li>Reminder to bring their laptop and charger</li>
        <li>Wi-Fi details for the office</li>
      </ul>
    </li>
    <li><strong>Email 2: Training Platform</strong>
      <ul>
        <li>Link to Mightora Training platform</li>
        <li>Signup code for the workshop</li>
      </ul>
    </li>
  </ul>
  <!-- 
    Notes: Send the first email 4 days out, the second 2 days out.
    This ensures everyone is ready and minimizes setup time on the day.
  -->
</section>

---
<!-- On the Day Setup -->
<section>
  <h2>On the Day: Setup</h2>
</section>

----
<section>
  <h3>Instructor Arrival Checklist</h3>
  <ul>
    <li>Arrive at least 1 hour before start time.</li>
    <li><strong>Power:</strong> Check power strips and extension cords are available for all tables.</li>
    <li><strong>Wi-Fi:</strong> Connect to the guest Wi-Fi and run a speed test. Note down any login steps.</li>
    <li><strong>Screen:</strong> Connect to the main presentation screen and check resolution.</li>
    <li><strong>Holding Page:</strong> Display the participant holding page on the main screen.</li>
  </ul>
</section>

----
<section>
  <h3>Participant Holding Page</h3>
  <div class="highlight-box">
    <h2>Welcome to the ALM Workshop!</h2>
    <p>We'll be starting shortly.</p>
    <br>
    <p><strong>Wi-Fi Network:</strong> [Guest-WiFi-Name]</p>
    <p><strong>Password:</strong> [Guest-WiFi-Password]</p>
    <br>
    <p>Please make sure your laptop is powered on and connected.</p>
  </div>
</section>

---
<!-- Introduction -->
<section>
  <h2>Introduction</h2>
</section>

----
<section>
  <h3>Workshop Goals</h3>
  <ul>
    <li>Understand the "Why" behind CI/CD for Power Platform.</li>
    <li>Move from manual solution exports to automated pipelines.</li>
    <li>Build a foundational, repeatable pipeline for your projects.</li>
    <li>Gain confidence in using Azure DevOps for ALM.</li>
  </ul>
</section>

----
<section>
  <h3>Today's Agenda</h3>
  <ul>
    <li><strong>Morning:</strong> Foundations & First Pipeline</li>
    <li>Manual Deployment Pain Points</li>
    <li>Azure Setup (App Registrations)</li>
    <li>Your First "Hello World" Pipeline</li>
    <li>Exporting a Solution with a Pipeline</li>
    <li><strong>Afternoon:</strong> Building & Deploying</li>
    <li>Importing to Test</li>
    <li>Designing a Production Release</li>
    <li>Automating Documentation & Testing</li>
  </ul>
</section>

----
<section>
  <h3>Our Learning Approach: EDIP</h3>
  <div class="container">
    <div class="col">
      <h4>E: Explain</h4>
      <p>We introduce the concept and its importance.</p>
    </div>
    <div class="col">
      <h4>D: Demonstrate</h4>
      <p>We walk through the process step-by-step.</p>
    </div>
  </div>
  <div class="container">
    <div class="col">
      <h4>I: Impersonate</h4>
      <p>You follow along with us, performing the same steps.</p>
    </div>
    <div class="col">
      <h4>P: Practice</h4>
      <p>You complete the exercise independently.</p>
    </div>
  </div>
  <!-- 
    Notes: Emphasize that this is a hands-on workshop.
    Mistakes are encouraged as learning opportunities.
  -->
</section>

---
<!-- SMEAC Scenario -->
<section>
  <h2>SMEAC Scenario</h2>
</section>

----
<section>
  <h3>SMEAC: The Mission Brief</h3>
  <ul>
    <li><strong>S</strong>ituation: We are a team managing Power Platform solutions.</li>
    <li><strong>M</strong>ission: To automate our deployment process.</li>
    <li><strong>E</strong>xecution: We will build pipelines to move our solution from Dev to Prod.</li>
    <li><strong>A</strong>dministration: We'll use provided user accounts and environments.</li>
    <li><strong>C</strong>ommand: The instructors will guide the process.</li>
  </ul>
</section>

----
<section>
  <h3>Background: Your Environment</h3>
  <ul>
    <li><strong>Three Environments:</strong>
      <ul>
        <li>`{4letters}-dev`</li>
        <li>`{4letters}-test`</li>
        <li>`{4letters}-prod`</li>
      </ul>
    </li>
    <li><strong>Azure DevOps:</strong> You have an assigned project.</li>
    <li><strong>User ID:</strong> Your unique 4-letter identifier (e.g., `abcd`).</li>
  </ul>
</section>

----
<section>
  <h3>Architecture Principles</h3>
  <ul>
    <li><strong>Source of Truth:</strong> The Git repository is the single source of truth.</li>
    <li><strong>Repeatability:</strong> Every process must be repeatable and automated.</li>
    <li><strong>Isolation:</strong> Environments are completely separate.</li>
    <li><strong>Traceability:</strong> Changes are linked to work items and commits.</li>
  </ul>
</section>

---
<!-- Manual Deployment (Baseline) -->
<section>
  <h2>The "Old Way": Manual Deployment</h2>
</section>

----
<section>
  <h3>Activity: A Painful Reminder</h3>
  <p>Let's walk through the manual deployment process together.</p>
  <p>This will set our baseline and highlight the problems we're here to solve.</p>
</section>

----
<section>
  <h3>Step 1: Log In & Find Your URLs</h3>
  <ul>
    <li>Log in to the Power Platform Admin Center.</li>
    <li>Navigate to each of your three environments.</li>
    <li><strong>Action:</strong> Record the Environment URL for Dev, Test, and Prod in a text file.</li>
  </ul>
  <!-- 
    Notes: This seems simple, but it's a common point of failure.
    People copy the wrong URL or forget to save them.
  -->
</section>

----
<section>
  <h3>Step 2: Export the Solution</h3>
  <ul>
    <li>Go to your <strong>Dev</strong> environment.</li>
    <li>Find the pre-installed "Template Solution".</li>
    <li>Export the solution as <strong>Managed</strong>.</li>
    <li>Download the .zip file to your machine.</li>
  </ul>
</section>

----
<section>
  <h3>Step 3: Import the Solution</h3>
  <ul>
    <li>Navigate to your <strong>Test</strong> environment.</li>
    <li>Go to Solutions > Import solution.</li>
    <li>Select the .zip file you just downloaded.</li>
    <li>Click through the import wizard.</li>
  </ul>
</section>

----
<section>
  <h3>Discussion: What Could Go Wrong?</h3>
  <ul>
    <li>What if you exported as Unmanaged?</li>
    <li>What if you imported into the wrong environment?</li>
    <li>How do you know which version is where?</li>
    <li>What if the import fails? How do you roll back?</li>
    <li>Was that process stressful?</li>
  </ul>
</section>

---
<!-- App Registrations -->
<section>
  <h2>Step 1: App Registrations</h2>
</section>

----
<section>
  <h3>Why App Registrations?</h3>
  <ul>
    <li>Pipelines need a way to authenticate to Power Platform.</li>
    <li>They can't use your user account and password.</li>
    <li>An App Registration acts as a "service principal" or a non-human identity.</li>
    <li>It's granted specific permissions to act on our behalf.</li>
  </ul>
</section>

----
<section>
  <h3>One per Environment</h3>
  <ul>
    <li>We will create <strong>three</strong> App Registrations.</li>
    <li>One for each environment: Dev, Test, and Prod.</li>
    <li>This follows the principle of least privilege.</li>
    <li>The "Dev" principal can only access the Dev environment, and so on.</li>
  </ul>
</section>

----
<section>
  <h3>Walkthrough: Creating the "Dev" App Reg</h3>
  <p>I will now demonstrate creating the first App Registration for the <strong>Dev</strong> environment.</p>
  <p>Please watch first, then you will impersonate and practice.</p>
  <!-- 
    Instructor: Go slowly. Explain each step clearly.
    Show where to find the Azure portal and App registrations screen.
  -->
</section>

----
<section>
  <h3>Demo: App Registration</h3>
  <div class="demo-box">
    <p>Creating the App Registration and granting API permissions.</p>
  </div>
  <video controls muted src="../260311-your-first-power-platform-devops-pipeline/brave_ODu5vMfo0o.mp4"></video>
  <!-- 
    Notes: This video shows the core process.
    Pause and explain the difference between Tenant and Client ID.
  -->
</section>

----
<section>
  <h3>Your Turn: Create Three App Registrations</h3>
  <ul>
    <li>Follow the demonstrated steps.</li>
    <li>Create one for each environment:
      <ul>
        <li>`{4letters}-dev-principal`</li>
        <li>`{4letters}-test-principal`</li>
        <li>`{4letters}-prod-principal`</li>
      </ul>
    </li>
    <li>For each one, capture the following in your text file:
      <ul>
        <li><strong>Tenant ID</strong> (will be the same for all three)</li>
        <li><strong>Client ID</strong></li>
        <li><strong>Client Secret</strong> (save this immediately!)</li>
      </ul>
    </li>
  </ul>
</section>

----
<section>
  <h3>Add Application User in Power Platform</h3>
  <p>Now, we need to tell Power Platform about our new principals.</p>
  <div class="demo-box">
    <p>Adding the Application User and assigning the System Administrator role.</p>
  </div>
  <video controls muted src="../260311-your-first-power-platform-devops-pipeline/msedge_eHL4W9sQv0.mp4"></video>
  <!-- 
    Notes: Explain that this step links the Azure AD principal to the Dataverse user.
  -->
</section>

----
<section>
  <h3>Your Turn: Add App Users</h3>
  <ul>
    <li>Go to the Power Platform Admin Center.</li>
    <li>For <strong>each</strong> of your three environments:</li>
    <li>Go to Settings > Users + permissions > Application users.</li>
    <li>Add the corresponding App Registration.</li>
    <li>Assign the <strong>System Administrator</strong> security role.</li>
  </ul>
</section>

---
<!-- Azure Pipelines – Failure First -->
<section>
  <h2>Step 2: Azure Pipelines - Failure First</h2>
</section>

----
<section>
  <h3>The Goal: Learn from Failure</h3>
  <ul>
    <li>We will now intentionally create a pipeline that will fail.</li>
    <li>This simulates a common real-world problem.</li>
    <li>Understanding *why* it fails is a critical lesson.</li>
  </ul>
</section>

----
<section>
  <h3>Navigate to the "No Parallelism" Org</h3>
  <ul>
    <li>Your instructor will provide a URL to a specific Azure DevOps organization.</li>
    <li>This organization has been configured to have <strong>zero</strong> free parallel jobs.</li>
  </ul>
</section>

----
<section>
  <h3>Create Your First Repo</h3>
  <ul>
    <li>In the "No Parallelism" project, navigate to <strong>Repos</strong>.</li>
    <li>Create a new repository named <code>{4letters}-first</code>.</li>
    <li>Initialize it with a README file.</li>
  </ul>
</section>

----
<section>
  <h3>Create a "Hello World" Pipeline</h3>
  <ul>
    <li>Navigate to <strong>Pipelines</strong>.</li>
    <li>Click "New pipeline".</li>
    <li>Choose "Azure Repos Git" and select your <code>{4letters}-first</code> repo.</li>
    <li>Select "Starter pipeline".</li>
    <li>Save and run the default "Hello World" YAML file.</li>
  </ul>
</section>

----
<section>
  <h3>Observe the Failure</h3>
  <ul>
    <li>The pipeline will queue but will not run.</li>
    <li>You will see a message: <em>"This agent request is not running because you have reached the maximum number of requests that can run for parallelism type 'Microsoft-Hosted Private'."</em></li>
  </ul>
  <div class="warning-box">
    This is one of the most common blockers for beginners.
  </div>
</section>

----
<section>
  <h3>Discussion: Root Cause</h3>
  <ul>
    <li>What does "parallelism" mean in this context?</li>
    <li>Why does Microsoft limit this on free tiers? (Hint: crypto mining)</li>
    <li>How do we solve this?
      <ul>
        <li>Request the free grant from Microsoft.</li>
        <li>Add a paid parallel job to the organization.</li>
      </ul>
    </li>
  </ul>
</section>

---
<!-- Azure Pipelines – Success -->
<section>
  <h2>Step 3: Azure Pipelines - Success!</h2>
</section>

----
<section>
  <h3>Switch to the Correct Organization</h3>
  <ul>
    <li>Now, let's move to our main workshop organization.</li>
    <li>This one has parallelism enabled.</li>
  </ul>
</section>

----
<section>
  <h3>Recreate the Pipeline</h3>
  <ul>
    <li>Create a new repo: <code>{4letters}-success</code>.</li>
    <li>Create a new "Starter pipeline" just as before.</li>
    <li>Save and run.</li>
  </ul>
</section>

----
<section>
  <h3>Validate Success</h3>
  <ul>
    <li>This time, the pipeline job should start immediately.</li>
    <li>Click into the job to see the logs.</li>
    <li>You should see the "Hello World" message printed.</li>
    <li>Congratulations! You have run your first successful pipeline.</li>
  </ul>
</section>

---
<!-- Comfort Break -->
<section>
  <h2>Comfort Break</h2>
  <h3>15 Minutes</h3>
</section>

---
<!-- Git Basics -->
<section>
  <h2>Step 4: Git Basics for Pipelines</h2>
</section>

----
<section>
  <h3>Core Git Concepts</h3>
  <ul>
    <li><strong>Repository (Repo):</strong> A folder containing your project's code and history.</li>
    <li><strong>Commit:</strong> A snapshot of your code at a specific point in time.</li>
    <li><strong>Branch:</strong> An independent line of development. We often use `main` or `dev`.</li>
    <li><strong>Pipeline:</strong> An automated process that is triggered by a commit to a branch.</li>
  </ul>
</section>

----
<section>
  <h3>The Pipeline Lifecycle</h3>
  <ol>
    <li>You change a file in your repo.</li>
    <li>You <strong>commit</strong> the change to a <strong>branch</strong>.</li>
    <li>The commit triggers a <strong>pipeline</strong>.</li>
    <li>The pipeline runs its automated steps.</li>
  </ol>
</section>

---
<!-- Git in Pipelines -->
<section>
  <h2>Step 5: Using Git in a Pipeline</h2>
</section>

----
<section>
  <h3>Activity: Modify a File with a Pipeline</h3>
  <p>We will now create a pipeline that interacts with the Git repository itself.</p>
</section>

----
<section>
  <h3>Create a File</h3>
  <ul>
    <li>In your <code>{4letters}-success</code> repo, create a new file named <code>mydata.txt</code>.</li>
    <li>Add the text "Hello from the repo" to it.</li>
    <li>Commit the new file directly to the `main` branch.</li>
  </ul>
</section>

----
<section>
  <h3>Edit the Pipeline</h3>
  <ul>
    <li>Edit your `azure-pipelines.yml` file.</li>
    <li>Replace the contents with the following:</li>
  </ul>
<pre><code class="yaml" data-trim>
trigger:
- main

pool:
  vmImage: 'windows-latest'

steps:
- script: echo Reading the file...
  displayName: 'Read Original File'

- script: type mydata.txt
  displayName: 'Display File Contents'

- script: echo "Hello from the pipeline!" >> mydata.txt
  displayName: 'Append Text to File'

- script: type mydata.txt
  displayName: 'Display New File Contents'
</code></pre>
</section>

----
<section>
  <h3>Commit and Run</h3>
  <ul>
    <li>Save and run the pipeline.</li>
    <li>Examine the logs for the "Display New File Contents" step.</li>
    <li>You will see the appended text.</li>
    <li><strong>Question:</strong> Is the file in your Git repo updated? Why not?</li>
  </ul>
</section>

----
<section>
  <h3>Committing Changes from a Pipeline</h3>
  <ul>
    <li>To save changes back to the repo, the pipeline must perform a `git commit`.</li>
    <li>This requires setting up identity and permissions.</li>
    <li>Let's add the steps to do this.</li>
  </ul>
</section>

----
<section>
  <h3>Updated Pipeline with Git Commit</h3>
<pre><code class="yaml" data-trim>
# ... (previous steps) ...

- script: |
    git config --global user.email "pipeline@vsts.com"
    git config --global user.name "VSTS Pipeline"
    git add .
    git commit -m "Append data from pipeline"
    git push
  displayName: 'Commit and Push Changes'
  env:
    System.AccessToken: $(System.AccessToken)
</code></pre>
  <div class="warning-box">
    Note: We need to give the pipeline permission to write back to the repo. This is done in Project Settings.
  </div>
</section>

---
<!-- Export Solution Pipeline -->
<section>
  <h2>Step 6: Export Solution Pipeline</h2>
</section>

----
<section>
  <h3>Goal: Automated Backup</h3>
  <ul>
    <li>We will build a pipeline that automatically:
      <ol>
        <li>Exports our solution from the <strong>Dev</strong> environment.</li>
        <li>Unpacks the solution into readable source files.</li>
        <li>Commits the files to a Git repository.</li>
      </ol>
    </li>
    <li>This gives us a version-controlled history of our application.</li>
  </ul>
</section>

----
<section>
  <h3>Install Power Platform Build Tools</h3>
  <p>This extension adds all the necessary pipeline tasks for Power Platform.</p>
  <div class="demo-box">
    <p>Installing the Power Platform Build Tools from the Visual Studio Marketplace.</p>
  </div>
  <video controls muted src="../msBuildTools.gif"></video>
  <!-- 
    Notes: This is a one-time setup per Azure DevOps organization.
  -->
</section>

----
<section>
  <h3>Create a Service Connection</h3>
  <ul>
    <li>A Service Connection stores the credentials for our App Registration securely.</li>
    <li>Go to Project Settings > Service connections.</li>
    <li>Create a new "Power Platform" service connection.</li>
    <li>Enter your <strong>Dev</strong> environment URL and the details for your <strong>dev-principal</strong> (Tenant ID, Client ID, Secret).</li>
    <li>Name it <code>{4letters}-dev-connection</code>.</li>
  </ul>
</section>

----
<section>
  <h3>Demo: Creating a Service Connection</h3>
  <div class="demo-box">
    <p>Walkthrough of creating the Power Platform service connection.</p>
  </div>
  <video controls muted src="../260311-your-first-power-platform-devops-pipeline/msedge_Xe9SvGfBKl.mp4"></video>
</section>

----
<section>
  <h3>Create the Backup Repo</h3>
  <ul>
    <li>Create a new, empty repository named <code>{4letters}-backup</code>.</li>
    <li>This repo will store our unpacked solution files.</li>
  </ul>
</section>

----
<section>
  <h3>Create the Export Pipeline</h3>
  <ul>
    <li>In the <code>{4letters}-backup</code> repo, create a new pipeline.</li>
    <li>Use the following YAML as a starting point.</li>
  </ul>
<pre><code class="yaml" data-trim>
trigger: none # We will run this manually or on a schedule

pool:
  vmImage: 'windows-latest'

variables:
  SolutionName: 'TemplateSolution' # The solution to export

steps:
- task: PowerPlatformToolInstaller@2
  displayName: 'Install Power Platform Tools'

- task: PowerPlatformExportSolution@2
  displayName: 'Export Solution'
  inputs:
    powerPlatformConnection: '{4letters}-dev-connection'
    solutionName: '$(SolutionName)'
    solutionOutputFile: '$(Build.ArtifactStagingDirectory)\$(SolutionName).zip'

- task: PowerPlatformUnpackSolution@2
  displayName: 'Unpack Solution'
  inputs:
    solutionFile: '$(Build.ArtifactStagingDirectory)\$(SolutionName).zip'
    solutionTargetFolder: '$(Build.SourcesDirectory)\solution'

# ... (Commit steps will be added next)
</code></pre>
</section>

----
<section>
  <h3>Add Commit Steps</h3>
  <ul>
    <li>Add the `git commit` steps we learned earlier.</li>
    <li>The pipeline will now export, unpack, and commit the solution source code.</li>
  </ul>
<pre><code class="yaml" data-trim>
# ... (previous steps) ...

- script: |
    git config --global user.email "pipeline@vsts.com"
    git config --global user.name "VSTS Pipeline"
    git add .
    git commit -m "Backup solution $(SolutionName)"
    git push
  displayName: 'Commit and Push Changes'
  env:
    System.AccessToken: $(System.AccessToken)
</code></pre>
</section>

----
<section>
  <h3>Run and Review Output</h3>
  <ul>
    <li>Run the pipeline.</li>
    <li>Once it completes, go to the <strong>Repos</strong> section.</li>
    <li>You should see a new `solution` folder containing all the components of your solution as individual files.</li>
  </ul>
</section>

---
<!-- Dev Branch Release -->
<section>
  <h2>Step 7: Dev Branch Release</h2>
</section>

----
<section>
  <h3>Goal: Continuous Integration</h3>
  <ul>
    <li>We now want a pipeline that automatically builds a release artifact whenever we commit to our `dev` branch.</li>
    <li>This artifact will be a <strong>managed</strong> solution .zip file, ready for deployment.</li>
  </ul>
</section>

----
<section>
  <h3>Create the Release Repo</h3>
  <ul>
    <li>Create a new repo: <code>{4letters}-solution-release</code>.</li>
    <li>Copy the `solution` folder from your <code>{4letters}-backup</code> repo into this new repo.</li>
    <li>Commit the files to a new branch named `dev`.</li>
  </ul>
</section>

----
<section>
  <h3>The "Pack and Publish" Pipeline</h3>
  <ul>
    <li>This pipeline will:
      <ol>
        <li>Pack the source files back into a solution .zip.</li>
        <li>Publish the .zip file as a "pipeline artifact".</li>
      </ol>
    </li>
    <li>Artifacts are the outputs of a pipeline, which can be used by other pipelines (or for manual download).</li>
  </ul>
</section>

----
<section>
  <h3>Build the Pipeline</h3>
<pre><code class="yaml" data-trim>
trigger:
- dev # This pipeline runs on commits to the dev branch

pool:
  vmImage: 'windows-latest'

variables:
  SolutionName: 'TemplateSolution'

steps:
- task: PowerPlatformToolInstaller@2
  displayName: 'Install Power Platform Tools'

- task: PowerPlatformPackSolution@2
  displayName: 'Pack Solution to Managed'
  inputs:
    solutionSourceFolder: '$(Build.SourcesDirectory)\solution'
    solutionOutputFile: '$(Build.ArtifactStagingDirectory)\$(SolutionName).zip'
    solutionType: 'Managed'

- task: PublishPipelineArtifact@1
  displayName: 'Publish Solution Artifact'
  inputs:
    targetPath: '$(Build.ArtifactStagingDirectory)'
    artifact: 'ManagedSolution'
</code></pre>
</section>

----
<section>
  <h3>Run and Verify</h3>
  <ul>
    <li>Commit the pipeline YAML to the `dev` branch.</li>
    <li>The pipeline should trigger automatically.</li>
    <li>After it runs, on the pipeline summary page, you will see a "Published Artifact".</li>
    <li>You can download the artifact and inspect the managed solution .zip file.</li>
  </ul>
</section>

---
<!-- Morning Recap -->
<section>
  <h2>Morning Recap</h2>
</section>

----
<section>
  <h3>What We've Accomplished</h3>
  <ul>
    <li>Understood the pain of manual deployments.</li>
    <li>Set up service principals for secure authentication.</li>
    <li>Learned how to create and run a basic Azure Pipeline.</li>
    <li>Built an automated backup pipeline to export and unpack our solution.</li>
    <li>Created a CI pipeline that builds a managed solution artifact on every commit.</li>
  </ul>
</section>

---
<!-- Lunch -->
<section>
  <h2>Lunch</h2>
  <h3>60 Minutes</h3>
</section>

---
<!-- Import to Test -->
<section>
  <h2>Step 8: Import to Test Environment</h2>
</section>

----
<section>
  <h3>Goal: Continuous Deployment (CD)</h3>
  <ul>
    <li>We will now create a "Release Pipeline" that takes the artifact from our build pipeline and deploys it to the <strong>Test</strong> environment.</li>
    <li>This is the "CD" part of CI/CD.</li>
  </ul>
</section>

----
<section>
  <h3>Create the "Test" Service Connection</h3>
  <ul>
    <li>Just as we did for Dev, create a new Power Platform service connection.</li>
    <li>Use the URL for your <strong>Test</strong> environment.</li>
    <li>Use the credentials for your <code>{4letters}-test-principal</code>.</li>
    <li>Name it <code>{4letters}-test-connection</code>.</li>
  </ul>
</section>

----
<section>
  <h3>Create a Release Pipeline</h3>
  <ul>
    <li>In Azure DevOps, go to <strong>Pipelines > Releases</strong>.</li>
    <li>Create a "New release pipeline".</li>
    <li>Start with an "Empty job".</li>
  </ul>
</section>

----
<section>
  <h3>Configure the Artifact</h3>
  <ul>
    <li>In the release pipeline, click "Add an artifact".</li>
    <li><strong>Source type:</strong> Build</li>
    <li><strong>Source (build pipeline):</strong> Select your <code>{4letters}-solution-release</code> pipeline.</li>
    <li><strong>Default version:</strong> Latest</li>
    <li><strong>Source alias:</strong> Keep the default.</li>
  </ul>
</section>

----
<section>
  <h3>Configure the "Test" Stage</h3>
  <ul>
    <li>Click on the "Stage 1" box to configure the deployment tasks.</li>
    <li>Add the following tasks to the agent job:
      <ol>
        <li>Power Platform Tool Installer</li>
        <li>Power Platform Import Solution</li>
      </ol>
    </li>
  </ul>
</section>

----
<section>
  <h3>Configure the Import Task</h3>
  <ul>
    <li><strong>Service Connection:</strong> <code>{4letters}-test-connection</code></li>
    <li><strong>Solution Input File:</strong> Click the `...` and navigate to the `ManagedSolution` artifact and select the .zip file.</li>
    <li><strong>Import as managed:</strong> This should be checked.</li>
  </ul>
</section>

----
<section>
  <h3>Create a Release and Deploy</h3>
  <ul>
    <li>Save the release pipeline.</li>
    <li>Click "Create release".</li>
    <li>A new release will be created. Click "Deploy" on the Test stage.</li>
    <li>Monitor the logs to watch the deployment happen.</li>
    <li><strong>Verify:</strong> Go to your Test environment and confirm the solution is there.</li>
  </ul>
</section>

---
<!-- Production Deployment -->
<section>
  <h2>Step 9: Production Deployment</h2>
</section>

----
<section>
  <h3>Group Design Exercise</h3>
  <ul>
    <li>Now for the final step: deploying to Production.</li>
    <li>This should be a more controlled process than deploying to Test.</li>
    <li><strong>On your tables:</strong> Whiteboard what a good production deployment process looks like.</li>
  </ul>
</section>

----
<section>
  <h3>Whiteboard Thinking - Prompts</h3>
  <ul>
    <li>Who should be allowed to start a production deployment?</li>
    <li>Should it be automatic?</li>
    <li>What kind of approvals should be in place?</li>
    <li>How do we use Git branches to manage this? (e.g., `main` branch)</li>
    <li>What happens after deployment?</li>
  </ul>
</section>

----
<section>
  <h3>A Common Pattern: GitFlow</h3>
  <ul>
    <li><strong>`dev` branch:</strong> Used for active development and CI builds. Deploys automatically to the Test environment.</li>
    <li><strong>Pull Request (PR):</strong> A formal request to merge changes from `dev` into the `main` branch. Requires peer review.</li>
    <li><strong>`main` branch:</strong> Represents production-ready code. A commit to `main` triggers the production deployment.</li>
  </ul>
</section>

----
<section>
  <h3>Build the Production Pipeline</h3>
  <ul>
    <li>Clone your "Test" stage in the release pipeline and name it "Production".</li>
    <li>Create a <code>{4letters}-prod-connection</code> service connection.</li>
    <li>Update the Import Solution task to use the new Prod connection.</li>
    <li>Configure the trigger for the Production stage to be "After stage" (Test).</li>
  </ul>
</section>

----
<section>
  <h3>Add a Pre-Deployment Approval</h3>
  <ul>
    <li>On the Production stage, click the "Pre-deployment conditions" icon.</li>
    <li>Enable "Pre-deployment approvals".</li>
    <li>Add your instructor as an approver.</li>
    <li>Now, the pipeline will pause and wait for a manual approval before deploying to Production.</li>
  </ul>
</section>

----
<section>
  <h3>Deploy and Verify</h3>
  <ul>
    <li>Create a new release.</li>
    <li>It will deploy to Test automatically.</li>
    <li>After Test succeeds, it will pause and wait for approval for Production.</li>
    <li>The instructor will approve it.</li>
    <li>The deployment to Production will proceed.</li>
    <li><strong>Verify:</strong> Check your Prod environment for the solution.</li>
  </ul>
</section>

---
<!-- Documentation -->
<section>
  <h2>Step 10: Automating Documentation</h2>
</section>

----
<section>
  <h3>Why Automate Documentation?</h3>
  <ul>
    <li>Documentation is crucial but often neglected.</li>
    <li>If it's not automated, it goes out of date.</li>
    <li>We can use a pipeline to generate documentation and publish it to an Azure DevOps Wiki.</li>
  </ul>
</section>

----
<section>
  <h3>Using the "Generate Docs" Extension</h3>
  <p>There are marketplace extensions that can help with this. We'll use a conceptual script here.</p>
  <div class="demo-box">
    <p>This video shows an example of a documentation generation pipeline.</p>
  </div>
  <video controls muted src="../devopspipelines/msedge_hHqXmiCb4i.mp4"></video>
  <!-- 
    Notes: This video is a stand-in to illustrate the concept.
    The key takeaway is that the pipeline generates markdown files.
  -->
</section>

----
<section>
  <h3>Pipeline for Wiki Publishing</h3>
  <ul>
    <li>This pipeline would:
      <ol>
        <li>Run a tool that extracts information from the solution source files.</li>
        <li>Generate a set of Markdown (`.md`) files.</li>
        <li>Commit those Markdown files to a special Git repo that powers the Azure DevOps Wiki.</li>
      </ol>
    </li>
    <li>This requires a Personal Access Token (PAT) for authentication.</li>
  </ul>
</section>

---
<!-- Testing -->
<section>
  <h2>Step 11: Testing</h2>
</section>

----
<section>
  <h3>Testing: A Discussion</h3>
  <ul>
    <li>Automated testing is a huge topic.</li>
    <li>It can be complex on local machines due to different screen resolutions, browser versions, etc.</li>
    <li>Today, we will focus on the concepts.</li>
  </ul>
</section>

----
<section>
  <h3>Conceptual Approaches to Testing</h3>
  <ul>
    <li><strong>Unit Tests:</strong> Using tools to test individual components, like a Power Fx formula or a piece of JavaScript.</li>
    <li><strong>UI Testing:</strong> Using tools like Playwright or Selenium to record and play back user interactions with your app.</li>
    <li><strong>API Testing:</strong> Testing custom connectors or API endpoints directly.</li>
  </ul>
</section>

----
<section>
  <h3>Where Testing Fits in the Pipeline</h3>
  <ul>
    <li>Tests should run after a deployment to an environment (like Test).</li>
    <li>The pipeline would:
      <ol>
        <li>Deploy to Test.</li>
        <li>Run the automated test suite against the Test environment.</li>
        <li>If tests pass, the release is approved to go to the next stage.</li>
        <li>If tests fail, the release is rejected.</li>
      </ol>
    </li>
  </ul>
</section>

---
<!-- Reflection & Close -->
<section>
  <h2>Reflection & Close</h2>
</section>

----
<section>
  <h3>Reflection Questions</h3>
  <ul>
    <li>What was the most challenging part of today's workshop?</li>
    <li>What was the most valuable thing you learned?</li>
    <li>How will you apply this to your next project?</li>
    <li>What is one thing you are still unsure about?</li>
  </ul>
</section>

----
<section>
  <h3>Feedback, Please!</h3>
  <p>Your feedback is essential for us to improve future workshops.</p>
  <p>Please scan the QR code to complete a short feedback form.</p>
  <img src="../260311-your-first-power-platform-devops-pipeline/qr.jpg" alt="QR Code for feedback" style="height: 300px;">
</section>

----
<section>
  <h3>Prize Draw!</h3>
  <div class="highlight-box">
    <h2>Win a 1-hour Azure DevOps Coaching Session!</h2>
    <p>One lucky participant who completes the feedback form will win a personalized coaching session to help with their specific project challenges.</p>
  </div>
</section>

---
<!-- After the Session (Instructor Only) -->
<section>
  <h2>After the Session (Instructor Only)</h2>
</section>

----
<section>
  <h3>Cleanup Checklist</h3>
  <ul>
    <li>Remove the paid parallel job from the Azure DevOps organization to stop billing.</li>
    <li>Remove all participant user accounts from the Azure DevOps project.</li>
    <li>(Optional) Delete the participant Power Platform environments and user licenses after a set period (e.g., 7 days).</li>
  </ul>
</section>
