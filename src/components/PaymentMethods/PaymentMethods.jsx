/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { SizeThumbnailSmallBrandSadadLanguageEnglish } from "../../icons/SizeThumbnailSmallBrandSadadLanguageEnglish";
import { SizeThumbnailSmallBrandWalletsLanguageEnglish } from "../../icons/SizeThumbnailSmallBrandWalletsLanguageEnglish";
import "./style.css";

export const PaymentMethods = ({ size, brand, language, sizeThumbnailSmallClassName }) => {
  return (
    <>
      {(brand === "LMG-rewards" ||
        brand === "apple-pay" ||
        brand === "cash-on-delivery" ||
        brand === "installments" ||
        (brand === "jio-money" && size === "thumbnail-large") ||
        (brand === "jio-money" && size === "thumbnail-small") ||
        brand === "knet" ||
        brand === "landmark-rewards" ||
        brand === "mada" ||
        brand === "mastercard" ||
        brand === "mobikwik" ||
        brand === "my-credit" ||
        brand === "net-banking" ||
        brand === "paypal" ||
        brand === "paytm" ||
        brand === "ru-pay" ||
        brand === "shukran" ||
        (brand === "tabby" && size === "thumbnail-large") ||
        (brand === "tabby" && size === "thumbnail-small") ||
        brand === "visa" ||
        (brand === "wallets" && size === "medium") ||
        (brand === "wallets" && size === "original") ||
        (brand === "wallets" && size === "small")) && (
        <div className={`payment-methods ${brand} ${size} ${language} ${sizeThumbnailSmallClassName}`}>
          {((brand === "LMG-rewards" && size === "medium") ||
            (brand === "LMG-rewards" && size === "small") ||
            brand === "apple-pay" ||
            (brand === "cash-on-delivery" && size === "medium") ||
            (brand === "cash-on-delivery" && size === "original") ||
            (brand === "cash-on-delivery" && size === "small") ||
            brand === "installments" ||
            (brand === "knet" && size === "medium") ||
            (brand === "knet" && size === "small") ||
            (brand === "mada" && size === "medium") ||
            (brand === "mada" && size === "small") ||
            brand === "mastercard" ||
            (brand === "mobikwik" && size === "medium") ||
            (brand === "mobikwik" && size === "original") ||
            (brand === "mobikwik" && size === "small") ||
            brand === "my-credit" ||
            brand === "net-banking" ||
            brand === "paypal" ||
            brand === "paytm" ||
            brand === "ru-pay" ||
            brand === "shukran" ||
            brand === "wallets") && (
            <div className="payment_logo">
              {(brand === "apple-pay" ||
                brand === "installments" ||
                brand === "mastercard" ||
                brand === "net-banking" ||
                brand === "paypal" ||
                brand === "ru-pay" ||
                (brand === "shukran" && size === "thumbnail-large") ||
                (brand === "shukran" && size === "thumbnail-small")) && (
                <div className="g">
                  {["installments", "mastercard", "paypal", "ru-pay"].includes(brand) && (
                    <div className="overlap">
                      {brand === "installments" && (
                        <div className="EPP-icon">
                          <img
                            className="shape"
                            alt="Shape"
                            src={
                              size === "thumbnail-small"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-43.svg"
                                : size === "thumbnail-large"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-32.svg"
                                : undefined
                            }
                          />
                          <img
                            className="img"
                            alt="Shape"
                            src={
                              size === "thumbnail-small"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-42.svg"
                                : size === "thumbnail-large"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-31.svg"
                                : undefined
                            }
                          />
                          <img
                            className="shape-2"
                            alt="Shape"
                            src={
                              size === "thumbnail-small"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-41.svg"
                                : size === "thumbnail-large"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-30.svg"
                                : undefined
                            }
                          />
                          <img
                            className="shape-3"
                            alt="Shape"
                            src={
                              size === "thumbnail-small"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-40.svg"
                                : size === "thumbnail-large"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-29.svg"
                                : undefined
                            }
                          />
                          <img
                            className="shape-4"
                            alt="Shape"
                            src={
                              size === "thumbnail-small"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-39.svg"
                                : size === "thumbnail-large"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-28.svg"
                                : undefined
                            }
                          />
                          <img
                            className="shape-5"
                            alt="Shape"
                            src={
                              size === "thumbnail-small"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-38.svg"
                                : size === "thumbnail-large"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-27.svg"
                                : undefined
                            }
                          />
                          <img
                            className="shape-6"
                            alt="Shape"
                            src={
                              size === "thumbnail-small"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-37.svg"
                                : size === "thumbnail-large"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-26.svg"
                                : undefined
                            }
                          />
                          <img
                            className="shape-7"
                            alt="Shape"
                            src={
                              size === "thumbnail-small"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-36.svg"
                                : size === "thumbnail-large"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-25.svg"
                                : undefined
                            }
                          />
                          <img
                            className="shape-8"
                            alt="Shape"
                            src={
                              size === "thumbnail-small"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-35.svg"
                                : size === "thumbnail-large"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-24.svg"
                                : undefined
                            }
                          />
                        </div>
                      )}

                      {brand === "mastercard" && <div className="rect" />}

                      {["mastercard", "paypal", "ru-pay"].includes(brand) && (
                        <img
                          className="XMLID"
                          alt="Xmlid"
                          src={
                            brand === "mastercard" && size === "thumbnail-small"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/xmlid-330--4.svg"
                              : size === "thumbnail-large" && brand === "mastercard"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/xmlid-330--3.svg"
                              : size === "small" && brand === "mastercard"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/xmlid-330-.svg"
                              : brand === "ru-pay" && size === "thumbnail-small"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4510-9-4.svg"
                              : brand === "ru-pay" && size === "thumbnail-large"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4510-9-3.svg"
                              : brand === "ru-pay" && ["medium", "original"].includes(size)
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4510-9-2.svg"
                              : brand === "ru-pay" && size === "small"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4510-9.svg"
                              : size === "thumbnail-small" && brand === "paypal"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/group-4-4@2x.png"
                              : size === "thumbnail-large" && brand === "paypal"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/group-4-3@2x.png"
                              : brand === "paypal" && ["medium", "original"].includes(size)
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/group-4-2@2x.png"
                              : size === "small" && brand === "paypal"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/group-4@2x.png"
                              : "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/xmlid-330--2.svg"
                          }
                        />
                      )}

                      {["mastercard", "paypal", "ru-pay"].includes(brand) && (
                        <img
                          className="fill"
                          alt="Fill"
                          src={
                            size === "thumbnail-small" && brand === "paypal"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/fill-5-4.svg"
                              : size === "thumbnail-large" && brand === "paypal"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/fill-5-3.svg"
                              : size === "small" && brand === "paypal"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/fill-5.svg"
                              : brand === "mastercard" && size === "thumbnail-small"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path22-4.svg"
                              : size === "thumbnail-large" && brand === "mastercard"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path22-3.svg"
                              : brand === "mastercard" && ["medium", "original"].includes(size)
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path22-2.svg"
                              : size === "small" && brand === "mastercard"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path22.svg"
                              : brand === "ru-pay" && size === "thumbnail-small"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4512-4-4.svg"
                              : brand === "ru-pay" && size === "thumbnail-large"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4512-4-3.svg"
                              : brand === "ru-pay" && ["medium", "original"].includes(size)
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4512-4-2.svg"
                              : brand === "ru-pay" && size === "small"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4512-4.svg"
                              : "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/fill-5-2.svg"
                          }
                        />
                      )}

                      {["paypal", "ru-pay"].includes(brand) && (
                        <>
                          <img
                            className="fill-2"
                            alt="Fill"
                            src={
                              size === "thumbnail-small" && brand === "paypal"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/fill-6-4.svg"
                                : size === "thumbnail-large" && brand === "paypal"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/fill-6-3.svg"
                                : size === "small" && brand === "paypal"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/fill-6.svg"
                                : brand === "ru-pay" && size === "thumbnail-small"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4514-8-4.svg"
                                : brand === "ru-pay" && size === "thumbnail-large"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4514-8-3.svg"
                                : brand === "ru-pay" && ["medium", "original"].includes(size)
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4514-8-2.svg"
                                : brand === "ru-pay" && size === "small"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4514-8.svg"
                                : "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/fill-6-2.svg"
                            }
                          />
                          <img
                            className="group"
                            alt="Group"
                            src={
                              size === "thumbnail-small" && brand === "paypal"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/group-10-4@2x.png"
                                : size === "thumbnail-large" && brand === "paypal"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/group-10-3@2x.png"
                                : size === "small" && brand === "paypal"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/group-10@2x.png"
                                : brand === "ru-pay" && size === "thumbnail-small"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4516-8-4.svg"
                                : brand === "ru-pay" && size === "thumbnail-large"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4516-8-3.svg"
                                : brand === "ru-pay" && ["medium", "original"].includes(size)
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4516-8-2.svg"
                                : brand === "ru-pay" && size === "small"
                                ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4516-8.svg"
                                : "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/group-10-2@2x.png"
                            }
                          />
                        </>
                      )}

                      {brand === "ru-pay" && (
                        <img
                          className="path"
                          alt="Path"
                          src={
                            size === "thumbnail-small"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4518-2-4.svg"
                              : size === "thumbnail-large"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4518-2-3.svg"
                              : size === "small"
                              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4518-2.svg"
                              : "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path4518-2-2.svg"
                          }
                        />
                      )}
                    </div>
                  )}

                  {["apple-pay", "net-banking", "shukran"].includes(brand) && (
                    <img
                      className="shape-9"
                      alt="Shape"
                      src={
                        brand === "net-banking" && size === "small"
                          ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-4.svg"
                          : brand === "apple-pay" && size === "thumbnail-small"
                          ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path-10.svg"
                          : size === "thumbnail-large" && brand === "apple-pay"
                          ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path-9.svg"
                          : brand === "net-banking" && size === "thumbnail-small"
                          ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-23.svg"
                          : brand === "net-banking" && size === "thumbnail-large"
                          ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-20.svg"
                          : brand === "apple-pay" && ["medium", "original"].includes(size)
                          ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path-4.svg"
                          : brand === "apple-pay" && size === "small"
                          ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path-2.svg"
                          : size === "thumbnail-small" && brand === "shukran"
                          ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/combined-shape-7.svg"
                          : size === "thumbnail-large" && brand === "shukran"
                          ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/combined-shape-6.svg"
                          : "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-17.svg"
                      }
                    />
                  )}

                  {["apple-pay", "net-banking"].includes(brand) && (
                    <>
                      <img
                        className="shape-10"
                        alt="Shape"
                        src={
                          brand === "net-banking" && size === "small"
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-3.svg"
                            : brand === "apple-pay" && size === "thumbnail-small"
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/rectangle-4.svg"
                            : size === "thumbnail-large" && brand === "apple-pay"
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/rectangle-3.svg"
                            : brand === "net-banking" && size === "thumbnail-small"
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-22.svg"
                            : brand === "net-banking" && size === "thumbnail-large"
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-19.svg"
                            : brand === "apple-pay" && ["medium", "original"].includes(size)
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/rectangle-2.svg"
                            : brand === "apple-pay" && size === "small"
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/rectangle.svg"
                            : "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-16.svg"
                        }
                      />
                      <img
                        className="shape-11"
                        alt="Shape"
                        src={
                          brand === "net-banking" && size === "small"
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-2.svg"
                            : brand === "apple-pay" && size === "thumbnail-small"
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-47.svg"
                            : size === "thumbnail-large" && brand === "apple-pay"
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-46.svg"
                            : brand === "net-banking" && size === "thumbnail-small"
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-21.svg"
                            : brand === "net-banking" && size === "thumbnail-large"
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-18.svg"
                            : brand === "apple-pay" && ["medium", "original"].includes(size)
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-7.svg"
                            : brand === "apple-pay" && size === "small"
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-5.svg"
                            : "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-15.svg"
                        }
                      />
                    </>
                  )}

                  {brand === "paypal" && (
                    <div className="overlap-group">
                      <img
                        className="fill-3"
                        alt="Fill"
                        src={
                          size === "thumbnail-small"
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/fill-12-4.svg"
                            : size === "thumbnail-large"
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/fill-12-3.svg"
                            : size === "small"
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/fill-12.svg"
                            : "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/fill-12-2.svg"
                        }
                      />
                      <img
                        className="fill-4"
                        alt="Fill"
                        src={
                          size === "thumbnail-small"
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/fill-13-4.svg"
                            : size === "thumbnail-large"
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/fill-13-3.svg"
                            : size === "small"
                            ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/fill-13.svg"
                            : "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/fill-13-2.svg"
                        }
                      />
                    </div>
                  )}
                </div>
              )}

              {((brand === "cash-on-delivery" && language === "english") ||
                brand === "my-credit" ||
                (brand === "net-banking" && size === "medium") ||
                (brand === "net-banking" && size === "original") ||
                (brand === "net-banking" && size === "small") ||
                brand === "paytm" ||
                brand === "ru-pay" ||
                (brand === "shukran" && language === "arabic") ||
                brand === "wallets") && (
                <img
                  className="group-2"
                  alt="Group"
                  src={
                    size === "thumbnail-small" && brand === "my-credit"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/group-5@2x.png"
                      : size === "thumbnail-large" && brand === "my-credit"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/group-2@2x.png"
                      : brand === "paytm" && size === "thumbnail-small"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/combined-shape-11.svg"
                      : size === "thumbnail-large" && brand === "paytm"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/combined-shape-9.svg"
                      : brand === "shukran" && ["medium", "original"].includes(size)
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/bitmap-8@2x.png"
                      : size === "small" && language === "arabic"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/bitmap-6@2x.png"
                      : brand === "paytm" && ["medium", "original"].includes(size)
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/combined-shape-5.svg"
                      : brand === "paytm" && size === "small"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/combined-shape-1.svg"
                      : brand === "wallets" && ["medium", "original"].includes(size)
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/wallets-2.svg"
                      : size === "small" && brand === "wallets"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/wallets.svg"
                      : brand === "ru-pay" && size === "thumbnail-small"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/g6161-4-4@2x.png"
                      : brand === "ru-pay" && size === "thumbnail-large"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/g6161-4-3@2x.png"
                      : brand === "ru-pay" && ["medium", "original"].includes(size)
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/g6161-4-2@2x.png"
                      : brand === "net-banking" && ["medium", "original"].includes(size)
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/net-banking-2.svg"
                      : brand === "net-banking" && size === "small"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/net-banking.svg"
                      : brand === "ru-pay" && size === "small"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/g6161-4@2x.png"
                      : brand === "cash-on-delivery" && ["medium", "original"].includes(size)
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/cash-2.svg"
                      : brand === "cash-on-delivery" && size === "small"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/cash.svg"
                      : undefined
                  }
                />
              )}

              {(brand === "my-credit" ||
                brand === "paytm" ||
                (brand === "cash-on-delivery" && language === "english") ||
                (brand === "shukran" && language === "arabic")) && (
                <img
                  className="on-delivery"
                  alt="On delivery"
                  src={
                    brand === "cash-on-delivery" && size === "small"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/on-delivery.svg"
                      : size === "thumbnail-small" && brand === "my-credit"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/group-3@2x.png"
                      : size === "thumbnail-large" && brand === "my-credit"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/group-1@2x.png"
                      : brand === "paytm" && size === "thumbnail-small"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/combined-shape-10.svg"
                      : size === "thumbnail-large" && brand === "paytm"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/combined-shape-8.svg"
                      : brand === "shukran" && ["medium", "original"].includes(size)
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/bitmap-7@2x.png"
                      : size === "small" && language === "arabic"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/bitmap-5@2x.png"
                      : brand === "paytm" && ["medium", "original"].includes(size)
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/combined-shape-4.svg"
                      : brand === "paytm" && size === "small"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/combined-shape.svg"
                      : "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/on-delivery-2.svg"
                  }
                />
              )}

              {brand === "cash-on-delivery" && language === "english" && (
                <img
                  className="cash-on-delivery-2"
                  alt="Cash on delivery"
                  src={
                    size === "small"
                      ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/cash-on-delivery@2x.png"
                      : "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/cash-on-delivery-2@2x.png"
                  }
                />
              )}

              {brand === "wallets" && (
                <div className="div">
                  <img
                    className="path-2"
                    alt="Path"
                    src={
                      size === "small"
                        ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path-1.svg"
                        : "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path-8.svg"
                    }
                  />
                  <img
                    className="path-3"
                    alt="Path"
                    src={
                      size === "small"
                        ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path.svg"
                        : "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/path-7.svg"
                    }
                  />
                  <img
                    className="shape-12"
                    alt="Shape"
                    src={
                      size === "small"
                        ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape.svg"
                        : "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/shape-10.svg"
                    }
                  />
                </div>
              )}
            </div>
          )}

          {((brand === "cash-on-delivery" && size === "thumbnail-large") ||
            (brand === "cash-on-delivery" && size === "thumbnail-small") ||
            brand === "jio-money" ||
            (brand === "knet" && size === "thumbnail-large") ||
            (brand === "knet" && size === "thumbnail-small") ||
            brand === "landmark-rewards" ||
            (brand === "mada" && size === "thumbnail-large") ||
            (brand === "mada" && size === "thumbnail-small") ||
            (brand === "mobikwik" && size === "thumbnail-large") ||
            (brand === "mobikwik" && size === "thumbnail-small") ||
            brand === "tabby" ||
            (brand === "visa" && size === "medium") ||
            (brand === "visa" && size === "small") ||
            (brand === "visa" && size === "thumbnail-large") ||
            (brand === "visa" && size === "thumbnail-small")) && (
            <img
              className="payment-logo"
              alt="Payment logo"
              src={
                brand === "cash-on-delivery" && size === "thumbnail-small"
                  ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/payment-logo-28@2x.png"
                  : size === "thumbnail-large" && brand === "cash-on-delivery"
                  ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/payment-logo-27@2x.png"
                  : brand === "jio-money" && size === "thumbnail-small"
                  ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/payment-logo-26.svg"
                  : brand === "jio-money" && size === "thumbnail-large"
                  ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/payment-logo-25.svg"
                  : brand === "knet" && size === "thumbnail-small"
                  ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/payment-logo-24@2x.png"
                  : size === "thumbnail-large" && brand === "knet"
                  ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/payment-logo-23@2x.png"
                  : size === "thumbnail-small" && brand === "landmark-rewards"
                  ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/payment-logo-22.svg"
                  : size === "thumbnail-large" && brand === "landmark-rewards"
                  ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/payment-logo-21.svg"
                  : brand === "mada" && size === "thumbnail-small"
                  ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/payment-logo-20@2x.png"
                  : brand === "mada" && size === "thumbnail-large"
                  ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/payment-logo-19@2x.png"
                  : brand === "mobikwik" && size === "thumbnail-small"
                  ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/payment-logo-18.svg"
                  : size === "thumbnail-large" && brand === "mobikwik"
                  ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/payment-logo-17.svg"
                  : brand === "visa" && size === "thumbnail-small"
                  ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/payment-logo-16.svg"
                  : size === "thumbnail-large" && brand === "visa"
                  ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/payment-logo-15.svg"
                  : brand === "tabby" && size === "thumbnail-small"
                  ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/payment-methods-2.svg"
                  : brand === "tabby" && size === "thumbnail-large"
                  ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/payment-methods-1.svg"
                  : size === "medium"
                  ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/payment-logo-12.svg"
                  : size === "small"
                  ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/payment-logo-1.svg"
                  : undefined
              }
            />
          )}
        </div>
      )}

      {(brand === "card" ||
        (brand === "jio-money" && size === "medium") ||
        (brand === "jio-money" && size === "original") ||
        (brand === "jio-money" && size === "small") ||
        (brand === "sadad" && size === "medium") ||
        (brand === "sadad" && size === "original") ||
        (brand === "sadad" && size === "small") ||
        (brand === "sadad" && size === "thumbnail-large") ||
        (brand === "tabby" && size === "medium") ||
        (brand === "tabby" && size === "original") ||
        (brand === "tabby" && size === "small")) && (
        <img
          className={`payment-methods size-thumbnail-small-2 size-32-${size} brand-${brand} ${sizeThumbnailSmallClassName}`}
          alt="Size thumbnail small"
          src={
            size === "thumbnail-small"
              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/size-thumbnail---small--brand-card--language-english.svg"
              : brand === "card" && size === "thumbnail-large"
              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/size-thumbnail---large--brand-card--language-english.svg"
              : size === "thumbnail-large" && brand === "sadad"
              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/size-thumbnail---large--brand-sadad--language-english.svg"
              : brand === "jio-money" && size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/size-medium--brand-jiomoney--language-english@3x.png"
              : brand === "jio-money" && size === "original"
              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/size-original--brand-jiomoney--language-english.svg"
              : brand === "sadad" && size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/size-medium--brand-sadad--language-english@3x.png"
              : brand === "sadad" && size === "original"
              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/size-original--brand-sadad--language-english.svg"
              : brand === "tabby" && size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/size-medium--brand-tabby--language-english@3x.png"
              : brand === "tabby" && size === "original"
              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/size-original--brand-tabby--language-english.svg"
              : brand === "jio-money" && size === "small"
              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/size-small--brand-jiomoney--language-english.svg"
              : brand === "sadad" && size === "small"
              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/size-small--brand-sadad--language-english.svg"
              : brand === "tabby" && size === "small"
              ? "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/size-small--brand-tabby--language-english.svg"
              : undefined
          }
        />
      )}

      {brand === "sadad" && size === "thumbnail-small" && (
        <SizeThumbnailSmallBrandSadadLanguageEnglish className="size-thumbnail-small-brand-sadad-language-english" />
      )}

      {brand === "wallets" && ["thumbnail-large", "thumbnail-small"].includes(size) && (
        <SizeThumbnailSmallBrandWalletsLanguageEnglish
          className={`${size === "thumbnail-large" ? "class" : "size-thumbnail-small-brand-sadad-language-english"}`}
        />
      )}
    </>
  );
};

PaymentMethods.propTypes = {
  size: PropTypes.oneOf(["thumbnail-small", "thumbnail-large", "original", "small", "medium"]),
  brand: PropTypes.oneOf([
    "card",
    "shukran",
    "ru-pay",
    "tabby",
    "apple-pay",
    "paypal",
    "LMG-rewards",
    "landmark-rewards",
    "mastercard",
    "wallets",
    "jio-money",
    "paytm",
    "sadad",
    "mobikwik",
    "my-credit",
    "mada",
    "cash-on-delivery",
    "knet",
    "installments",
    "visa",
    "net-banking",
  ]),
  language: PropTypes.oneOf(["english", "arabic"]),
};
