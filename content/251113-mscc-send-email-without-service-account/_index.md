+++
title = "Death Of Manual Docs - A DevOps Approach to Power Platform Documentation"
description = "A DevOps Approach to Power Platform Documentation"
outputs = ["Reveal"]
[reveal_hugo]
# Theme - https://revealjs.com/themes/
custom_theme = "css/techTweedieLight.css"
# theme = "white"
margin = 0.2
highlight_theme = "github"
transition = "convex"
transition_speed = "default"
slide_number = true
controlsTutorial = false
controls = false
center = false
touch = true
draft = false
[logo]
# https://reveal-hugo.dzello.com/logo-example/#/3
 src = "/techTweedie_150x150.png"
 alt = "techTweedie.github.io" # Alt text. 
 width = "100px" # Size of the file.
# Side info
# Transition options: zoom, concave, convex, slide, fade, none
# Speed: slow, default, fast

+++

<style>
:root {
  --primary-color: #4B514F;
  --secondary-color: #1b1d24ff;
  --accent-color: #742774;
  --success-color: #0D7F41;
  --info-color: #243A5E;
  --warning-color:rgb(0, 0, 0);
  --r-link-color: #3666FF;
  --r-link-color-hover: #742774;
  --r-selection-background-color: rgba(54, 102, 255, 0.3);
}

.reveal {
  font-family: "Bebas Neue", sans-serif;
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
.instruction-item {
    display: flex;
    align-items: center;
    margin: 15px 0;
    padding: 10px;
    background-color: rgba(54, 102, 255, 0.05);
    border-radius: 5px;
}
.instruction-item svg {
    margin-right: 15px;
    flex-shrink: 0;
}
.instruction-text {
    flex: 1;
}
.key-combo {
    background-color: var(--secondary-color);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.9em;
}
</style>




{{< slide content="common.navigate.howto" >}}

---

## The Death of Manual Docs

</br>

## A DevOps Approach to Power Platform Documentation

<aside class="notes">
  Welcome slide
</aside>

---

## The Problem

<div class="highlight-box">

- ✅ We have a solution
- ✅ Keeps getting updated
- ✅ Certainty that its correct

</div>

<aside class="notes">

- Power Platform Solution
- Build by a team
- Documentation is not forthcoming
- Or maybe we don't live in that space but we have a responsibility for it
- Need to easily see inside to unserstand whats going on

</aside> 

---

{{< slide content="common.about.iantweedie" >}}

---

## Pre-requisites

<div class="demo-box">

- Already exporting out our solution
- Using Azure DevOps
- We are using a YAML pipeline
- *(I have a presentation on how to do this - [click here](https://itweedie.github.io/devopspipelines/250627-build-your-first-devops-pipeline/#/15))*

</div>

<aside class="notes">
  The pipeline I am going to use today continues on from another presentation last year, link to that is here. 
</aside>

</section>


---

## Send Emails from Flow without a Service Account

<div class="demo-box">

Want to send emails from **Power Automate** but can't or don't want to use a service account?

Tired of dealing with:
- Conditional Access Policies
- Password expirations  
- Frequent logins
- Re-confirming security information

</div>

<aside class="notes">
Introduction to the problem we're solving today
</aside>

---

## What We'll Learn Today

<div class="highlight-box">

- ✅ Create and configure App Registration
- ✅ Assign API permissions
- ✅ Restrict sending access to specific mailboxes
- ✅ Use Power Automate with custom connector
- ✅ Send emails using app registration

</div>

<aside class="notes">
Overview of what we'll accomplish in this session
</aside>

---

## Create the App Registration

<div class="warning-box">
For this section you will need the help of a **Global Administrator**
</div>

<aside class="notes">
Starting with app registration creation - need admin help
</aside>

---

## Step 1 - Log in to Entra

<div class="instruction-item">
<div class="instruction-text">
By default most users will have the ability to go to **https://entra.microsoft.com** and log in with your user account.
</div>
</div>

<aside class="notes">
First step is accessing Entra portal
</aside>

---

## Step 2 - Create the App Registration

<div class="demo-box">

1. When you are on the Entra Overview page, open up **Identity**
2. Navigate to **Applications** → **App Registrations**
3. Select **New Registration**
4. Give your new app registration a name and click next

</div>

<aside class="notes">
Walking through the app registration creation process
</aside>

---

<section data-background-video="brave_T1ciTpvWmI.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
GIF showing the app registration creation process
</aside>

---

## Step 3 - Add API Permission

<div class="highlight-box">

We need to give our App Registration permission to talk to Exchange Online:

1. Click on **API Permission** in left menu
2. Click **Add permission**
3. Select **Application Permission**
4. Search for **mail.send**
5. Open **Mail** option and select **mail.send**

</div>

<aside class="notes">
Adding the necessary API permissions
</aside>

---

<section data-background-video="brave_pyTrq7A2fH.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
GIF showing API permission configuration
</aside>

---

## Important Security Note

<div class="warning-box">

**NOTE:** This permission lets you send emails as anyone, however we will restrict this later. 

**DO NOT MISUSE - IT IS POSSIBLE TO TRACK WHERE AN EMAIL CAME FROM**

</div>

<aside class="notes">
Important security warning about the broad permissions
</aside>

---

## Step 4 - Grant Admin Consent

<div class="demo-box">

1. You'll notice **Grant admin consent** is grayed out
2. This is because we lack administrative roles
3. **Ask a Global administrator to grant admin consent for you**

</div>

<aside class="notes">
Need admin to grant consent for the permissions
</aside>

---

<section data-background-video="msedge_b9Xouwxtt7.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
GIF showing admin granting consent
</aside>

---

## Limiting Application Permissions in Exchange

<div class="highlight-box">

Our next step is to limit what permissions our application will have within Exchange.

Currently `mail.send` allows sending from **any** user's email account.

**This stage needs an Exchange Online Administrator.**

</div>

<aside class="notes">
Now we need to restrict the broad permissions we just granted
</aside>

---

## Step 5 - Set up Mail Enabled Security Group

<div class="demo-box">

When we restrict access for an application registration, we need a **Mail-enabled Security group**.

1. Go to **Microsoft 365 Admin center** (admin.microsoft.com)
2. Open **Teams and Groups**
3. Select **Security** from menu
4. Click **Add new security group**

</div>

<aside class="notes">
First step in restriction - create the security group
</aside>

---

<section data-background-video="msedge_JAl1jlS395-B.mp4.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
GIF showing security group creation
</aside>

---

## Step 2 - Access PowerShell

<div class="instruction-item">
<div class="instruction-text">

We'll use **PowerShell** from **Cloud Shell**:

1. Navigate to Exchange Online (admin.cloud.microsoft/exchange)
2. Click **Cloud Shell** button in top right corner

</div>
</div>

<aside class="notes">
Setting up PowerShell environment
</aside>

---

<section data-background-video="msedge_f9urvujFXS-B.mp4.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
GIF showing Cloud Shell access
</aside>

---

## Step 3 - Create Application Access Policy

<div class="demo-box">

Let's look at our PowerShell command:

```powershell
New-ApplicationAccessPolicy -AppId b9701c1e-1364-464d-93e4-01ae925e8d6c -PolicyScopeGroupId PowerAutomateTest@Tweed.technology -AccessRight RestrictAccess -Description "Restrict this app to members of PowerAutomateTest@Tweed.technology"
```

</div>

<aside class="notes">
The PowerShell command to create the restriction policy
</aside>

---

## Command Breakdown

<div class="highlight-box">

- **New-ApplicationAccessPolicy** - Creates new application access policy
- **-AppId** - Unique identifier of the application
- **-PolicyScopeGroupId** - Group email that policy applies to
- **-AccessRight RestrictAccess** - Restricts access
- **-Description** - Explanation of policy purpose

</div>

<aside class="notes">
Breaking down what each parameter does
</aside>

---

## Step 4 - Install Exchange Module

<div class="warning-box">

**Problem:** Cloud Shell isn't connected to Exchange Online by default!

**Solution:** Install the Exchange Online Management Module

```powershell
Install-Module -Name ExchangeOnlineManagement -Force
```

</div>

<aside class="notes">
Need to install the Exchange module first
</aside>

---

## Import and Connect to Exchange

<div class="demo-box">

1. **Import the module:**
```powershell
Import-Module ExchangeOnlineManagement
```

2. **Connect to Exchange:**
```powershell
Connect-ExchangeOnline -Device
```

3. **Now run our policy command:**
```powershell
New-ApplicationAccessPolicy -AppId b9701c1e-1364-464d-93e4-01ae925e8d6c -PolicyScopeGroupId PowerAutomateTest@Tweed.technology -AccessRight RestrictAccess -Description "Restrict this app to members of PowerAutomateTest@Tweed.technology"
```

</div>

<aside class="notes">
Steps to properly connect and create the policy
</aside>

---

## Success Response

```powershell
ScopeName        : Power Automate Test
ScopeIdentity    : Power Automate Test20250209121934
Identity         : 63759d9f-bfca-4f52-ae98-8f2f1d7bc173\b9701c1e-1364-464d-93e4-01ae925e8d6c:S-1-5-21-3787302941-3231517822-469913106-31437838;998e9d79-817d-41c9-87d8-d9c07f27f4b2
AppId            : b9701c1e-1364-464d-93e4-01ae925e8d6c
ScopeIdentityRaw : S-1-5-21-3787302941-3231517822-469913106-31437838;998e9d79-817d-41c9-87d8-d9c07f27f4b2
Description      : Restrict this app to members of PowerAutomateTest@Tweed.technology
AccessRight      : RestrictAccess
ShardType        : All
IsValid          : True
ObjectState      : Unchanged
```

<aside class="notes">
What a successful policy creation looks like
</aside>

---

<section data-background-video="msedge_f9urvujFXS-C.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
GIF showing the PowerShell commands and success
</aside>

---

## Step 5 - Test the Policy

<div class="highlight-box">

**Test allowed user:**
```powershell
Test-ApplicationAccessPolicy -Identity testABC@Tweed.technology -AppId b9701c1e-1364-464d-93e4-01ae925e8d6c
```

**Result:** `AccessCheckResult : Granted`

**Test denied user:**
```powershell
Test-ApplicationAccessPolicy -Identity demo@Tweed.technology -AppId b9701c1e-1364-464d-93e4-01ae925e8d6c
```

**Result:** `AccessCheckResult : Denied`

</div>

<aside class="notes">
Testing that our policy works correctly
</aside>

---

<section data-background-video="msedge_4IBPmJ2a2n.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
GIF showing the policy testing
</aside>

---

## Download and Testing the Connector

<div class="demo-box">

Now let's set up the custom connector in Power Automate:

1. Navigate to `https://make.powerautomate.com/`
2. Change environment if needed
3. Go to **More** → **Discover all** → **Custom connectors**

</div>

<aside class="notes">
Moving on to setting up the Power Automate connector
</aside>

---

<section data-background-video="msedge_eb1IgNQwCG.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
GIF showing navigation to custom connectors
</aside>

---

## Create New Connector

<div class="highlight-box">

1. Click **New custom connector**
2. Click **Import an OpenAPI from URL**
3. **Connector name:** `Send email using Graph`
4. **URL:** 
```
https://raw.githubusercontent.com/itweedie/PowerPlatform-Send-Emails-from-Power-Automate-without-a-Service-Account/refs/heads/main/connector/shared_mightora-5fsend-20mail-20with-20graph-5fe07b0f04a8b0d4c3/apiDefinition.swagger.json
```

</div>

<aside class="notes">
Creating the custom connector from the GitHub repository
</aside>

---

<section data-background-video="msedge_Q2g7mnzmR9.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
GIF showing connector creation process
</aside>

---

## Configure Connector Security

<div class="demo-box">

1. Click **Security** tab
2. Use **OAuth 2.0**
3. Set Identity Provider to **Azure Active Directory**
4. Enable **Service Principal support**
5. Enter **Client ID** from your App Registration
6. Create and enter **Client Secret**
7. Set **Resource URL** to `https://graph.microsoft.com`
8. Click **Create**

</div>

<aside class="notes">
Configuring the security settings for the connector
</aside>

---

<section data-background-video="msedge_aKfrGH1oIO.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
GIF showing connector security configuration
</aside>

---

## Add C# Code for Attachments

<div class="warning-box">
**Optional:** Skip this if you won't send attachments
</div>

```csharp
public class Script : ScriptBase
{
    public override async Task<HttpResponseMessage> ExecuteAsync()
    {
        // Read the request content as a string
        var requestContentAsString = await this.Context.Request.Content.ReadAsStringAsync().ConfigureAwait(false);
        
        // Parse the request content string into a JSON object
        var requestContentAsJson = JObject.Parse(requestContentAsString);

        // Modify the attachments array if it exists
        if (requestContentAsJson["message"]?["attachments"] is JArray attachments)
        {
            foreach (var attachment in attachments)
            {
                // Add the @odata.type element
                attachment["@odata.type"] = "#microsoft.graph.fileAttachment";
            }
        }
        
        // Set the modified JSON back to the request content
        this.Context.Request.Content = CreateJsonContent(requestContentAsJson.ToString());

        // Send the API request and get the response
        var response = await this.Context.SendAsync(this.Context.Request, this.CancellationToken).ConfigureAwait(continueOnCapturedContext: false);
        
        return response;
    }
}
```

<aside class="notes">
C# code needed for attachment handling - truncated for slide
</aside>

---

<section data-background-video="msedge_ETA3maJOWu.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
GIF showing code addition process
</aside>

---

## Add Your First Connection

<div class="demo-box">

1. Click **Test** tab
2. Click **New connection**
3. Choose **Service Principal**
4. Click **Create Connection**
5. Enter your **Secret**, **Client ID**, and **Tenant ID**
6. Click **Create Connection**

</div>

<aside class="notes">
Setting up the first connection to test
</aside>

---

<section data-background-video="msedge_2mOjLRkn39.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
GIF showing connection creation
</aside>

---

## Test the Connector

<div class="highlight-box">

**Test Parameters:**
- **user-email:** Email from your security group
- **message.subject:** test message
- **message.body.contentType:** HTML
- **message.body.content:** test
- **saveToSentItems:** true
- **emailAddress.address:** Recipient email

**Expected Result:** 202 response + email received

</div>

<aside class="notes">
Testing the connector with sample data
</aside>

---

<section data-background-video="msedge_jHKMp5JkcW.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
GIF showing connector testing
</aside>

---

## Use in Power Automate Flow

<div class="demo-box">

1. Click **My flows**
2. Create new flow
3. Add trigger
4. Add new step
5. Choose **Custom** connector type
6. Select **Send email using Graph**
7. Fill out connector details
8. Test the flow

</div>

<aside class="notes">
Using the connector in an actual Power Automate flow
</aside>

---

<section data-background-video="msedge_7if2t23IPS.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
GIF showing flow creation and testing
</aside>

---

### Feedback, 
### Copy of Presentation, 
### stay Connected

![alt text](feedback.png)

[https://go.iantweedie.biz/feedback](https://go.iantweedie.biz/feedback)

