import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs";
import morgan from "morgan";
import dotenv from "dotenv";
import jwt from "jsonwebtoken"
import gravatar from "gravatar"
import { v4 } from "uuid"

