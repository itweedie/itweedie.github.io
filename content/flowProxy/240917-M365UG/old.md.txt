
---

{{< slide background-image="msedge_TeQ2S2Q5TZ.gif" >}}

<div style="background-color: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

### Azure function
- Forwards all headers received from the incoming request.
- Adds custom header Flow-Key (from environment variables).
- Handles GET method.
- Appends query parameters from the incoming request to the external URL.

</div>

```

FLOW_URL=https://prod-21.uksouth.logic.azure.com/workflows/your-logic-app-url
FLOW_KEY=your-flow-key-value

```

---
{{< slide  transition="zoom" >}}

### Lets deploy it

1. Fork it

---

{{< slide background-image="brave_ckTNRaGKk5.gif" >}}


---

{{< slide  transition="zoom" >}}

### Lets deploy it

1. Fork it
2. Deploy it

---

{{< slide background-image="brave_WeA1UkipGi.gif" >}}

---

{{< slide  transition="zoom" >}}

### Lets deploy it

1. Fork it
2. Deploy it
3. Add Environment variables

```

FLOW_URL=https://prod-15.uksouth.logic.azure.com/workflows/7a854d30969e4158bac2b17ac15d1ad7/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=FrLhWsuldO9AiPgF4ztcjuvjsSrBrJtlD5Mf17jjU_I 

https://prod-15.uksouth.logic.azure.com:443/workflows/7a854d30969e4158bac2b17ac15d1ad7/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=FrLhWsuldO9AiPgF4ztcjuvjsSrBrJtlD5Mf17jjU_I

FLOW_KEY=ABC123

```

---

{{< slide background-image="brave_bBNZhNjqA7.gif" >}}

---

### Lets deploy it

1. Fork it
2. Deploy it
3. Add Environment variables
4. Setup Azure B2C

---

{{< slide background-image="msedge_je378lkZiP.gif" >}}

---

https://prod-15.uksouth.logic.azure.com:443/workflows/7a854d30969e4158bac2b17ac15d1ad7/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=FrLhWsuldO9AiPgF4ztcjuvjsSrBrJtlD5Mf17jjU_I



@{triggerOutputs()['headers']['Flow-Key']}" />




---
{{< slide  transition="zoom" >}}
{{% section %}}
# Lets see that working
Demo 5

---

## Live Demo 5
1. [View Form](https://techtweedie.crm11.dynamics.com/main.aspx?appid=f49d2c8c-1232-ef11-8e4e-6045bd0d261b&pagetype=entityrecord&etn=techtwed_settlement&id=3272841e-6c32-ef11-8e4e-6045bd0d261b&formid=4225fbe1-7174-ef11-a670-000d3a0d2d37)
2. [Try it out](https://flowproxy1.azurewebsites.net/api/proxy/?row=SET-1000-R2R2)
3. [View Flow](https://make.powerapps.com/environments/b50bfa1f-d077-e56f-aeaa-b9f92d3b79ad/solutions/d3bfeafe-1132-ef11-8e4e-6045bd0d261b/objects/cloudflows/a999aa73-d908-47b5-82c5-311a8814e270/view)


---

{{< slide background-image="brave_GPF5DnIcsA.gif" >}}

---

{{< slide background-image="brave_dBvaPf9yIY.gif" >}}

{{% /section %}}
