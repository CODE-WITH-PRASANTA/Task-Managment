import React from 'react';
import './WebFacility.css';

// Existing Assets
import PaymentGuarantee from '../../assets/payment-guarantee-pic.svg';
import Dispute from '../../assets/assistance-disputes-pic.svg';
import Task from '../../assets/tasks-for-every-taste-pic.svg';
import ArtificialIntelligent from '../../assets/artificial-intelligence-pic.svg';
import QuickStart from '../../assets/quick-start-pic.svg';
import SimpleInterface from '../../assets/simple-interface-pic.svg';

// New Asset: Global Map Image
import globalmap from '../../assets/map-pic.svg';

const WebFacility = () => {
  return (
    <div className="web-facility">
      <h2 className="section-title">Why are we better than others?</h2>
      <div className="features-container">
        <div className="feature-item">
          <img src={PaymentGuarantee} alt="Payment Guarantee" />
          <h3>Payment guarantee</h3>
          <p>
            After you have been appointed for a Task, the Task fee gets reserved on the Buyer's account. Just complete the Task to get your payment.
          </p>
        </div>
        <div className="feature-item">
          <img src={Dispute} alt="Help in Disputes" />
          <h3>Help in Disputes</h3>
          <p>
            In case of any disagreement with a Buyer your concern can always be addressed to the independent Dispute Department, which will help you find a fair solution.
          </p>
        </div>
        <div className="feature-item">
          <img src={Task} alt="Tasks to suit any taste" />
          <h3>Tasks to suit any taste</h3>
          <p>
            No matter if you are an experienced Freelancer or a beginner, our highly trained artificial neural network will always choose the most interesting Tasks for you.
          </p>
        </div>
        <div className="feature-item">
          <img src={ArtificialIntelligent} alt="Artificial Intelligence" />
          <h3>Artificial Intelligence</h3>
          <p>
            Our neural network fairly evaluates the chances for all of the Freelancers to handle the Task. Newcomers can be confident that they will have every opportunity to get a job.
          </p>
        </div>
        <div className="feature-item">
          <img src={QuickStart} alt="Quick Start" />
          <h3>Quick start</h3>
          <p>
            Even newbies with no work experience can receive the Tasks.
          </p>
        </div>
        <div className="feature-item">
          <img src={SimpleInterface} alt="Simple Interface" />
          <h3>Simple interface</h3>
          <p>
            We have created a great opportunity for you to easily work and communicate with Buyers. Nothing else is required.
          </p>
        </div>
                </div>
            {/* New Section: Tasks from all over the world */}
            <div className="global-section">
            <div className="global-text-container">
                <h2 className="global-title">Tasks from all over the world</h2>
                <p className="global-subtitle">
                Complete Tasks remotely, no matter where you are!
                </p>
            </div>
            <img src={globalmap} alt="Global Map" className="global-map" />
            </div>

    </div>
  );
};

export default WebFacility;
