---
title: "Collaborate with External Participants in a Shared Channel (IT Admins)"
date: 2024-05-30
revealjs_theme: simple
revealjs_slideNumber: true
revealjs_transition: slide
---

# Collaborate with External Participants in a Shared Channel

---

## Introduction

- Enable users to collaborate with people in other Microsoft 365 organizations using shared channels.
- Requires configuration of B2B direct connect for each organization.
- Alternatively, enable shared channels with all external organizations.

---

## What Happens When You Enable Shared Channels?

- Team owners can invite people from other organizations to shared channels.
- Your organization's custom apps are available in shared channels for external participants.
- Your organization's apps list is available in shared channels for external participants.
- Note: Other organizations must also enable external shared channels.

---

## Prerequisites

- Guest access must be turned on for SharePoint and Microsoft 365 Groups.
- Microsoft 365 Groups sharing settings must be enabled.
- SharePoint org and site sharing must allow guests.
- Domains you're sharing with must not be blocked.
- **Shared channels between Commercial and GCC clouds are not supported.**

---

## Step 1: Enable Shared Channels in Teams

- Shared channels are enabled by default in Teams.
- To confirm or configure:
  1. In Teams admin center, expand **Teams** > **Teams policies**.
  2. Select the policy to edit.
  3. Enable:
     - Create shared channels
     - Invite external users to shared channels
     - Join external shared channels
  4. Select **Apply**.

---

## Step 2: Enable External Access

- In Teams admin center, expand **Users** > **External access**.
- Ensure organizations you want to collaborate with are not blocked.
- External access is required for meetings and presence.

---

## Step 3: Specify Internal Help Link (Optional)

- In Teams admin center, expand **Teams** > **Teams settings**.
- Under **Shared channels**, turn on **Provide a link to my support request page**.
- Enter your support page URL.
- Select **Save**.

---

## Step 4: Configure Cross-Tenant Access in Microsoft Entra

- Microsoft Entra External ID B2B direct connect is disabled by default.
- To enable collaboration:
  1. Add an organization.
  2. Configure inbound settings (allow users from the org to be invited to your shared channels).
  3. Configure outbound settings (allow your users to be invited to their shared channels).
  4. Enable the Office 365 application (includes Teams and SharePoint).
- **Note:** Changes may take up to 6 hours to take effect.

---

## Step 4a: Add an Organization

1. Sign in to Microsoft Entra admin center (Security admin account).
2. Select **External Identities** > **Cross-tenant access settings**.
3. Select **Organizational settings** > **Add organization**.
4. Enter the full domain name (or tenant ID) and select **Add**.

---

## Step 4b: Configure Inbound Settings

1. In Entra admin center, select **External Identities** > **Cross-tenant access settings**.
2. Select the inbound access link for the org.
3. On **B2B direct connect** tab, choose **Customize settings**.
4. On **External users and groups** tab, choose **Allow access** and **All external users and groups** (or select specific users/groups).
5. On **Applications** tab, choose **Allow access** and **Select applications**.
6. Add Microsoft applications > Select **Office 365** > **Select**.
7. **Save** and close the Inbound access settings blade.

---

## Step 4c: Configure Outbound Settings

1. In Entra admin center, select **External Identities** > **Cross-tenant access settings**.
2. Select the outbound access link for the org.
3. On **B2B direct connect** tab, choose **Customize settings**.
4. On **External users and groups** tab, choose **Allow access** and set **Applies to** all users.
5. On **External applications** tab, choose **Allow access** and **Select external applications**.
6. Add Microsoft applications > Select **Office 365** > **Select**.
7. **Save**, confirm, and close the Outbound access settings blade.

---

## Summary

- Shared channels enable secure collaboration with external organizations.
- Requires configuration in Teams admin center and Microsoft Entra.
- Ensure prerequisites are met and settings are applied in both organizations.

---

# Questions?

Thank you!
