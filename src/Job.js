import React, { useState } from "react";
import { Card, Badge, Button, Collapse } from "react-bootstrap";
import ReactMarkDown from "react-markdown";

export default function Job({ job }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} - <span className="text-muted">{job.company}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">
              {job.type}{" "}
            </Badge>
            <Badge variant="secondary">{job.location} </Badge>
            <div style={{ wordBreak: "break-all" }}>
              <ReactMarkDown source={job.how_to_apply}></ReactMarkDown>
            </div>
          </div>
          <img
            className="d-none d-md-block"
            height="60"
            src={job.company_logo}
          />
        </div>
        <Card.Text>
          <Button
            onClick={() => {
              setOpen(!open);
            }}
            variant="primary"
          >
            {open ? "Hide Details" : "View Details"}
          </Button>
          <Collapse in={open}>
            <div className="mt-4">
              <ReactMarkDown source={job.description} />
            </div>
          </Collapse>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
