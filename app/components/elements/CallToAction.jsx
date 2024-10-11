import config from "../config/config";

export default function CallToAction() {
  const callToAction = {
    firstButton: {
      url: "link:" + config.phoneNumber,
      text: config.phoneNumber,
    },
    secondButton: {
      url: "/signup",
      text: "Sign Up",
    },
  };

  return (
    <div className="hidden items-center gap-5 md:flex">
      {callToAction.firstButton.url && (
        <a className="btn-primary" href={callToAction.firstButton.url}>
          {callToAction.firstButton.text}
        </a>
      )}

      {callToAction.secondButton.url && (
        <a
          className="rounded-full bg-white px-6 py-2 text-black"
          href={callToAction.secondButton.url}
        >
          {callToAction.secondButton.text}
        </a>
      )}
    </div>
  );
}
