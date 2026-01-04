package patternbuilder

import "fmt"

type Notification struct {
	title    string
	subtitle string
	message  string
	image    string
	icon     string
	priority int
	notType  string
}

type NotificationBuilder struct {
	Title    string
	SubTitle string
	Message  string
	Image    string
	Icon     string
	Priority int
	NotType  string
}

func newNotificationBuilder() *NotificationBuilder {
	return &NotificationBuilder{}
}

func (nb *NotificationBuilder) SetTitle(title string) {
	nb.Title = title
}

func (nb *NotificationBuilder) SetSubTitle(subTitle string) {
	nb.SubTitle = subTitle
}

func (nb *NotificationBuilder) SetMessage(message string) {
	nb.Message = message
}

func (nb *NotificationBuilder) SetImage(image string) {
	nb.Image = image
}

func (nb *NotificationBuilder) SetIcon(icon string) {
	nb.Icon = icon
}

func (nb *NotificationBuilder) SetPriority(pri int) {
	nb.Priority = pri
}

func (nb *NotificationBuilder) SetType(notType string) {
	nb.NotType = notType
}

func (nb *NotificationBuilder) Build() (Notification, error) {
	if nb.Icon != "" && nb.SubTitle == "" {
		return Notification{}, fmt.Errorf("subtitle required when using icon")
	}
	if nb.Priority > 5 {
		return Notification{}, fmt.Errorf("priority must be 0 to 5")
	}

	return Notification{
		title:    nb.Title,
		subtitle: nb.SubTitle,
		message:  nb.Message,
		image:    nb.Image,
		icon:     nb.Icon,
		priority: nb.Priority,
		notType:  nb.NotType,
	}, nil
}

func Start() {
	var bldr = newNotificationBuilder()
	bldr.SetTitle("New Notification")
	bldr.SetIcon("icon.png")
	bldr.SetSubTitle("This is a subtitle") // blank subtitle will result in error
	bldr.SetImage("image.jpg")
	bldr.SetPriority(5) // priority not 0 to 5 will result in error
	bldr.SetImage("image.jpg")
	bldr.SetMessage("This is a basic notification")
	bldr.SetType("alert")

	notif, err := bldr.Build()
	if err != nil {
		fmt.Println("Error creating the notification:", err)
	} else {
		fmt.Printf("Notification:\n  Title: %s\n  Subtitle: %s\n  Message: %s\n  Image: %s\n  Icon: %s\n  Priority: %d\n  Type: %s\n",
			notif.title, notif.subtitle, notif.message, notif.image, notif.icon, notif.priority, notif.notType)
	}
}
