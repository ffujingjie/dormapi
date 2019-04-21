import { Request, Response } from "express";
import { ContactController } from "../controllers/crmController";

export class Routes {
  public contactController: ContactController = new ContactController();

  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      console.info(`Get / success`);
      res.status(200).send({
        message: "GET request successfulll!!!!"
      });
    });

    app
      .route("/contact")
      .post(this.contactController.addContact)
      .get(this.contactController.getContacts);

    app
      .route("/contact/:contactId")
      .get(this.contactController.getContact)
      .put(this.contactController.updateContact)
      .delete(this.contactController.deleteContact);
  }
}
