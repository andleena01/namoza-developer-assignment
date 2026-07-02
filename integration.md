# Google Tag Manager Integration

## Event Name

lead_form_submit

## Trigger

The event is pushed to the dataLayer when the user successfully submits the form.

## Sample Code

```javascript
window.dataLayer.push({
    event: "lead_form_submit",
    fullName: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    company: formData.company,
    service: formData.service,
    message: formData.message
});
```

## GTM Configuration

1. Create a Custom Event Trigger.
2. Event Name: `lead_form_submit`
3. Create a GA4 Event Tag.
4. Publish the container.
