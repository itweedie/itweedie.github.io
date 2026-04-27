+++
title = "Sometimes a Little Code Saves a Hundred-Step Flow"
description = "How to use custom connectors to simplify complex Power Automate flows."
outputs = ["Reveal"]
[reveal_hugo]
custom_theme = "css/techTweedieLight.css"
theme = "white"
margin = 0.1
highlight_theme = "github"
transition = "convex"
slide_number = true
controls = true
center = false
[logo]
src = "/images/itweedie-logo.png"
alt = "itweedie.github.io"
width = "100px"
+++

<!-- .slide: data-background-opacity="0" -->

## You open a Power Automate flow...

...and you start scrolling.

{{% fragment %}}And scrolling.{{% /fragment %}}

{{% fragment %}}And you keep scrolling.{{% /fragment %}}

{{% fragment %}}You find the step you're looking for, inside three nested conditions, and wonder how it ever got this complicated.{{% /fragment %}}

<!--
Speaker notes:
- Start with a shared, slightly painful experience.
- No title, no intro. Just the problem.
- Keep it slow, let the feeling sink in.
-->

---

## Hi, I'm Ian Tweedie

- Real-world experience with large-scale Power Platform solutions.
- I've seen (and built) my share of complex flows.
- My goal: find the right balance between low-code speed and long-term health.

<!--
Speaker notes:
- Quick, credible, and relatable.
- The focus is on shared experience, not just a list of credentials.
- Establishes that I understand the "maker" world.
-->

---

## How did we get here?

It started so simply.

{{% fragment %}}A trigger. A lookup. An approval.{{% /fragment %}}

{{% fragment %}}Then we added some validation. "If the amount is over £1000, check the supplier."{{% /fragment %}}

{{% fragment %}}Then more validation. "Check the cost centre, too."{{% /fragment %}}

{{% fragment %}}Then error handling. "If the lookup fails, send an email."{{% /fragment %}}

{{% fragment %}}Each step felt like a good idea at the time.{{% /fragment %}}

<!--
Speaker notes:
- Tell a story. This is the narrative of organic growth.
- Every maker has lived this. It's how flows evolve naturally.
- The tone is "we've all done this," not "you're doing it wrong."
-->

---

## The 100-Step Flow

<div class="r-stack">
<div class="fragment fade-in-then-out">
<p>A single trigger...</p>
</div>
<div class="fragment fade-in-then-out">
<p>...followed by dozens of initialisation steps...</p>
<p><code>Initialize variable</code></p>
<p><code>Initialize variable</code></p>
<p><code>Initialize variable</code></p>
</div>
<div class="fragment fade-in-then-out">
<p>...which lead into a web of nested conditions...</p>
<p><code>Condition</code> -> <code>Condition</code> -> <code>Condition</code></p>
</div>
<div class="fragment fade-in-then-out">
<p>...with duplicated validation logic inside each branch...</p>
<p>"Check if user is in security group A"</p>
<p>"Check if user is in security group A"</p>
</div>
<div class="fragment fade-in-then-out">
<p>...and inconsistent error handling scattered everywhere.</p>
<p><code>Scope: Try</code> / <code>Scope: Catch</code></p>
</div>
<div class="fragment">
<p>It's hard to follow, hard to test, and even harder to change.</p>
</div>
</div>

<!--
Speaker notes:
- Use fragments to build the complexity visually.
- Each fragment represents a common pattern people will recognise.
- The final statement summarises the pain: complexity kills agility.
-->

---

## The Turning Point

Sometimes a small amount of code...

{{% fragment %}}...replaces a hundred-step flow.{{% /fragment %}}

<!--
Speaker notes:
- This is the core message.
- Deliver it clearly and deliberately.
- It's a design decision, not just a technical trick.
-->

---

## The Solution: Connectors as Contracts

Instead of just wrapping an API, think of a Custom Connector as a **contract** for your makers.

- **Encapsulate Complexity:** Move messy logic *out* of the flow.
- **Centralise Validation:** One place to check data, not twenty.
- **Standardise Errors:** Consistent, predictable error responses.
- **Abstract Security:** Handle authentication once, securely.

{{% fragment %}}One clean action can replace dozens of steps.{{% /fragment %}}

<!--
Speaker notes:
- Keep this conceptual. It's about the "why," not the "how."
- The idea of a "contract" is key. It's a reliable, reusable building block.
- Avoid C# code here. Focus on the outcome for the flow.
-->

---

### Scenario 1: Data Validation

**BEFORE:**
- A 30-step flow for onboarding a new supplier.
- Multiple nested `Condition` steps to check the VAT number, company registration, and bank details.
- This logic is copied across three other flows.
- If the validation rules change, you have to update it everywhere.

**AFTER:**
- A single action in a custom connector: `Validate Supplier Details`.
- The C# code handles all the lookups and checks.
- It returns a simple `true` or `false`, with clear error messages.

**OUTCOME:**
- The flow is 10 steps long.
- Its purpose is clear: `Get Data` -> `Validate Data` -> `Create Record`.
- Validation is consistent and easy to update.

<!--
Speaker notes:
- Use a real, relatable business process.
- Contrast the complexity of the "before" with the simplicity of the "after."
- Emphasise the outcome: clarity, consistency, and maintainability.
-->

---

### Scenario 2: Complex API Calls

**BEFORE:**
- A flow calls an external legacy API.
- It uses a `Do Until` loop to retry on failure.
- Inside the loop, `Condition` steps check for different HTTP status codes (429, 500, 503).
- Complex `Compose` actions are used to build the request body.
- This entire 15-step pattern is copy-pasted wherever the API is needed.

**AFTER:**
- A single action: `Submit Invoice to Legacy System`.
- The connector's C# code handles the retry logic with Polly.
- It handles the complex request/response mapping.
- It returns a simple success or failure.

**OUTCOME:**
- The flow just calls the action. No loops, no conditions.
- The resilience policy is defined once.
- Makers don't need to know anything about HTTP status codes.

<!--
Speaker notes:
- This is a very common pattern.
- Pro-devs will recognise the value of Polly for resilience.
- Makers will recognise the pain of building complex retry loops.
- The outcome is abstraction: hiding technical details behind a simple action.
-->

---

## When *Not* to Use This

This is a scalpel, not a sledgehammer.

- **If it's simple, keep it in the flow.** Don't over-engineer.
- **If it's only used once.** Is the abstraction worth the effort?
- **If it stops a maker from solving their own problem.** The goal is empowerment, not creating a developer dependency.

This is about finding the right boundaries.

<!--
Speaker notes:
- Be honest about the trade-offs. This builds trust.
- This isn't a magic bullet for every problem.
- Reinforce the message that low-code is still the default and the right choice for many scenarios.
-->

---

## Reinforcing the Core Messages

1.  **Problem:** Long, complex flows are fragile.
    - We saw this in the "100-step flow" and the validation scenario.

2.  **Solution:** Encapsulate complexity in a Custom Connector.
    - The API retry logic is a perfect example.

3.  **Outcome:** Shorter, cleaner, more robust flows.
    - Both scenarios resulted in flows that were easier to read and maintain.

<!--
Speaker notes:
- Explicitly repeat the three core messages.
- Connect each message back to the examples already discussed.
- This helps the audience solidify the key takeaways.
-->

---

## Final Takeaways

1.  Complexity in flows is a choice.
2.  Connectors can be more than just API wrappers.
3.  Hide complexity, expose clarity.

<!--
Speaker notes:
- Short, memorable, and actionable.
- These should be the three things the audience remembers a week later.
- Each one has been introduced and reinforced throughout the talk.
-->

---

## Questions & Feedback

Ian Tweedie

- **Blog:** itweedie.github.io
- **LinkedIn:** iantweedie

Scan for feedback...

<!-- A QR code for feedback would go here -->

<!--
Speaker notes:
- Standard closing slide.
- Open the floor for questions.
-->
