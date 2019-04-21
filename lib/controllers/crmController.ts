import * as mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";
import { Request, Response } from "express";

const Contact = mongoose.model("Contact", ContactSchema);
export class ContactController {
  public addContact(req: Request, res: Response) {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public getContacts(req: Request, res: Response) {
    // console.info(`Get /contract success`);
    // res.statusCode = 201;
    // res.statusMessage = "service error";
    // // res.send("ss");
    // res.json({ data: "12344" });
    Contact.find({}, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public getContact(req: Request, res: Response) {
    Contact.findById(req.params.contactId, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  /** Remember that, without {new: true},
   *  the updated document will not be returned. */
  public updateContact(req: Request, res: Response) {
    Contact.findOneAndUpdate(
      { _id: req.params.contactId },
      req.body,
      { new: true },
      (err, contact) => {
        if (err) {
          res.send(err);
        }
        res.json(contact);
      }
    );
  }

  public deleteContact(req: Request, res: Response) {
    Contact.remove({ _id: req.params.contactId }, err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted contact!" });
    });
  }
}
