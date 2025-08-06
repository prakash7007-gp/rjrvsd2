import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! We will get back to you soon.",
        submissionId: submission.id 
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your input and try again.",
          error: error.message 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred. Please try again later." 
        });
      }
    }
  });

  // Get all contact submissions (admin endpoint)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve contact submissions." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
