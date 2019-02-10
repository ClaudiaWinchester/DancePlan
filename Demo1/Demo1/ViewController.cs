using Foundation;
using System;
using UIKit;

namespace Demo1
{
    public partial class ViewController : UIViewController
    {
        public ViewController (IntPtr handle) : base (handle)
        {
        }

        public override void ViewDidLoad ()
        {
            base.ViewDidLoad ();
            // Perform any additional setup after loading the view, typically from a nib.
            UILabel label = new UILabel();
            label.Text = "Gomitas";
            label.Frame = new CoreGraphics.CGRect(50, 50, 250, 50);

            View.AddSubview(label);
        }

        public override void DidReceiveMemoryWarning ()
        {
            base.DidReceiveMemoryWarning ();
            // Release any cached data, images, etc that aren't in use.
        }
    }
}