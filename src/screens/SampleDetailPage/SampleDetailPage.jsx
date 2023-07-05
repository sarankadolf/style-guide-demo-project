import React from "react";
import { BasicContainer } from "../../components/BasicContainer";
import { GeneralAddToLists } from "../../components/GeneralAddToLists";
import { PaymentMethods } from "../../components/PaymentMethods";
import { Titles } from "../../components/Titles";
import { ColoredShukran } from "../../icons/ColoredShukran";
import { PrimaryCross1 } from "../../icons/PrimaryCross1";
import { PrimaryTick } from "../../icons/PrimaryTick";
import { PrimaryTick1 } from "../../icons/PrimaryTick1";
import "./style.scss";

export const SampleDetailPage = () => {
  return (
    <div className="sample-detail-page">
      <div className="product-image">
        <div className="review-and-rating">
          <div className="rating">
            <div className="div-2">
              <div className="text-wrapper-2">4.5</div>
              <img
                className="colored-shukran"
                alt="Frame"
                src="https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/frame-584.svg"
              />
            </div>
          </div>
          <div className="review">
            <div className="div-2">
              <div className="text-wrapper-3">4 Reviews</div>
            </div>
          </div>
        </div>
        <div className="main-icons">
          <div className="icon">
            <div className="location-icon" />
          </div>
          <div className="icon">
            <div className="general-add-to-lists-wrapper">
              <GeneralAddToLists iconShape="https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/icon-shape.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="price-summary">
        <p className="p">Stark 6-Drawer Dresser with Mirror</p>
        <div className="frame">
          <div className="div-2">
            <div className="text-wrapper-4">AED 1,000</div>
            <div className="text-wrapper-5">AED 500</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-6">-50%</div>
          </div>
          <div className="frame-2">
            <div className="label-link">
              <div className="colored-shukran-wrapper">
                <ColoredShukran className="colored-shukran" />
              </div>
              <div className="text-wrapper-7">Earn 107 Shukrans</div>
            </div>
          </div>
        </div>
      </div>
      <div className="crucial-specific">
        <div className="frame-3">
          <PaymentMethods brand="tabby" language="english" size="small" sizeThumbnailSmallClassName="payment-methods" />
          <div className="frame-4">
            <p className="text-wrapper-8">Pay in 4 interest-free payments of AED 125</p>
            <div className="text-wrapper-9">Learn more</div>
          </div>
        </div>
      </div>
      <div className="crucial-specific-2">
        <div className="delivery-strip">
          <div className="div-3">
            <div className="frame-5">
              <div className="text-wrapper-10">Deliver to area</div>
              <div className="text-wrapper-11">Dubai Marina</div>
            </div>
          </div>
        </div>
        <div className="frame-6">
          <div className="express-truck-wrapper">
            <img
              className="express-truck"
              alt="Express truck"
              src="https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/express-truck.png"
            />
          </div>
          <div className="frame-wrapper">
            <div className="frame-7">
              <p className="text-wrapper-12">Get it by Thursday, 16th Jun</p>
              <p className="order-within">Order within 10 hours &amp; 56 minutes</p>
            </div>
          </div>
        </div>
        <div className="frame-6">
          <div className="frame-8">
            <div className="primary-tick-wrapper">
              <PrimaryTick1 className="primary-tick" />
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-9">
              <div className="text-wrapper-8">Eligible for free delivery</div>
              <div className="label-link-2">
                <div className="text-wrapper-7">How Shipping Fees Work</div>
                <div className="link-2">Details</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="colour">
        <Titles
          hasLink={false}
          hasTitle={false}
          text="Colour"
          titleClassName="titles-instance"
          type="with-attributes"
        />
        <div className="div-4">
          <div className="frame-10">
            <div className="div-4">
              <div className="colour-selected">
                <div className="primary-tick-2-wrapper">
                  <PrimaryTick className="primary-tick-2" color="white" />
                </div>
              </div>
            </div>
            <div className="text-wrapper-13">Grey</div>
          </div>
          <div className="frame-10">
            <div className="div-4">
              <div className="colour-selected">
                <BasicContainer
                  borderRadius="two-px-default"
                  className="basic-container-instance"
                  keepBorders="everywhere"
                />
              </div>
            </div>
            <div className="text-wrapper-14">Black</div>
          </div>
          <div className="frame-10">
            <div className="div-4">
              <div className="colour-selected">
                <BasicContainer
                  borderRadius="two-px-default"
                  className="basic-container-instance"
                  keepBorders="everywhere"
                />
              </div>
            </div>
            <div className="text-wrapper-14">Brown</div>
          </div>
        </div>
      </div>
      <div className="crucial-specific">
        <div className="div-3">
          <div className="streamline-interface-wrapper">
            <div className="express-truck">
              <div className="primary-cross-wrapper">
                <PrimaryCross1 className="primary-cross" />
              </div>
            </div>
          </div>
          <p className="text-wrapper-15">Product cannot be returned or exchanged</p>
        </div>
      </div>
      <div className="product-in-detail">
        <div className="frame-11">
          <div className="frame-12">
            <div className="text-wrapper-16">Description</div>
          </div>
          <div className="frame-13">
            <div className="text-wrapper-17">Specification</div>
          </div>
          <div className="frame-13">
            <div className="text-wrapper-17">Assembly</div>
          </div>
        </div>
        <p className="description">
          Simple yet elegant, this wardrobe door rail set is assured to uplift the style of your bedroom interiors. Made
          from a durable and sturdy material with a melamine finish
        </p>
      </div>
    </div>
  );
};
