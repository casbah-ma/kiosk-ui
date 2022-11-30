import Card_v1Map from ".";

export default {
  title: "Components/Card_v1Map",
  component: Card_v1Map,
};

const Template = (args) => <Card_v1Map {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      variant: "primary",
      image:
        "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      title: "Restaurant name",
      status: "opened",
      open: true,
      article:
        "Enim lectus dignissim arcu pharetra. Amet non elit et pulvinar amet. Orci non tristique in sagittis urna amet quisque aenean lacus...",
      time: "Open at 9:00 AM - Close at 23:00 PM",
      linkLabel: "Check the menu",
      btnvariant: "secondary",
      btncolor: "#000",
      btnbgColor: "#F3F3F3",
      btnborderColor: "#6A6969",
      btnborderWidth: "2px",
      btnlabel: "🇲🇦 Restaurant Marocain",
    },

    {
      variant: "primary",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "Restaurant name",
      status: "closed",
      open: false,
      article:
        "Enim lectus dignissim arcu pharetra. Amet non elit et pulvinar amet. Orci non tristique in sagittis urna amet quisque aenean lacus...",
      time: "Open at 9:00 AM - Close at 23:00 PM",
      linkLabel: "Check the menu",
      btnvariant: "secondary",
      btncolor: "#000",
      btnbgColor: "#F3F3F3",
      btnborderColor: "#6A6969",
      btnborderWidth: "2px",
      btnlabel: "🇲🇦 Restaurant Marocain",
    },
  ],
};
