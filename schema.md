# Form Data Structure

The form collects the following information:

| Field | Type | Required |
|------|------|----------|
| Full Name | String | Yes |
| Email | String | Yes |
| Phone | String | Yes |
| Company | String | No |
| Service | String | Yes |
| Message | String | No |

## dataLayer Event

```javascript
{
    event: "lead_form_submit",
    fullName: "...",
    email: "...",
    phone: "...",
    company: "...",
    service: "...",
    message: "..."
}
```
