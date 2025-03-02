from enum import Enum
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string


# from .email_templates.txt import *
# from .email_templates.html import *

class EmailService:

    class Purpose(Enum):
        LOGIN = "LOGIN"
        DOWNLOAD_DATASET = "DOWNLOAD_DATASET"
        APPROVE_SUBMISSION = "APPROVE_SUBMISSION"
        REJECT_SUBMISSION = "REJECT_SUBMISSION"
        NEW_SUBMISSION = "NEW_SUBMISSION"

    class Subject(Enum):
        LOGIN = "Your One-Time-Password"
        DOWNLOAD_DATASET = "Link to download your dataset"
        APPROVE_SUBMISSION = "Your Submission has been approved"
        REJECT_SUBMISSION = "Your Submission has been rejected"
        NEW_SUBMISSION = "A new Submission has been received"

    class PlainTextBody(Enum):
        LOGIN = "./email_templates/txt/login_template.txt"
        DOWNLOAD_DATASET = "./email_templates/txt/download_dataset_template.txt"
        APPROVE_SUBMISSION = "./email_templates/txt/submission_approved_template.txt"

    class HtmlBody(Enum):
        LOGIN = "./email_templates/html/login_template.html"
        DOWNLOAD_DATASET = "./email_templates/html/download_dataset_template.html"
        APPROVE_SUBMISSION = "./email_templates/html/submission_approved_template.html"

    def __init__(self, recipients: list[str], purpose: str, context: dict):
        """
        Service responsible for sending emails.

        :param recipient: Email address of the intended recipient.
        :param purpose: Purpose of the email, expected to match one of the predefined purposes.
        :param context: Context data used to render the email body.
        """

        self.recipient = recipients
        self.subject = self.Subject[purpose].value

        self.plain_text_body = render_to_string(self.PlainTextBody[purpose].value, context)
        self.html_body = render_to_string(self.HtmlBody[purpose].value, context)

        self.purpose = purpose

    def __str__(self):
        return (f"Email to: {self.recipient}, \nPurpose: {self.purpose}, \nSubject: {self.subject}, "
                f"\nContext: {self.plain_text_body}")

    def send(self):
        msg = EmailMultiAlternatives(
            subject=self.subject,
            body=self.plain_text_body,
            from_email= "from@example.com",
            to=self.recipient,
        )
        msg.attach_alternative(self.html_body, "text/html")
        msg.send()

        return msg



    #TODO add email settings
    #TODO link OTP to JWT
    #TODO FInish collections

