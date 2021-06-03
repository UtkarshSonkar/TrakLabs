import {Request, Response} from "express";
//import app from "../app"

export class Routes {

    public routes(app): void {
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })

        app.route('/view')
        // GET endpoint
        .get((req: Request, res: Response) => {
        // Get all employe
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })


        // POST endpoint
        .post((req: Request, res: Response) => {
        // Create new employee
            res.status(200).send({
                message: 'POST request successfulll!!!!'
            })
        })

        app.route('/view/:viewId')
        //PUT endpoint
        .put((req: Request, res: Response) => {
            // Update a contact
                res.status(200).send({
                    message: 'PUT request successfulll!!!!'
                })
            })
            .delete((req: Request, res: Response) => {
                // Delete a contact
                    res.status(200).send({
                        message: 'DELETE request successfulll!!!!'
                    })
                })


    }
}