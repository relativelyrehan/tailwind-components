import Image from 'next/image';

const LandingInvite = () => {
  return (
    <div className="my-20 md:my-24 lg:my-36 p-8">
      <div className="mx-auto flex md:flex-row flex-col justify-center">
        <div className="md:p-8 lg:p-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4">
            Join Our Slack Prototion <br /> community and get
          </h1>
          <ul className="list-disc text-gray-400 ml-4">
            <li className="mb-2">Q & A session with Notion experts.</li>
            <li className="mb-2">
              Feedback on your template and tips on how to improve it.
            </li>
            <li className="mb-2">
              Acess to Pro Notion templatese every month.
            </li>
            <li className="mb-2">
              Abitlity to trade your templates with community.
            </li>
            <li className="mb-2">Join Mindful discussions</li>
          </ul>
          <button className="block mx-auto my-12 px-8 py-4 rounded-lg bg-burnt text-white font-bold">
            Get Invitation
          </button>
        </div>
        <div className="md:p-8 lg:p-12">
          <Image src="/slacksection.png" height={420} width={560} />
        </div>
      </div>
    </div>
  );
};

export default LandingInvite;
