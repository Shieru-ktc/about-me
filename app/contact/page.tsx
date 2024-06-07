"use client";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FormField, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import RenderFormItem from "../../components/RenderFormItem";
import { Textarea } from "@/components/ui/textarea";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import React from "react";

type MyInputProps = {
  placeholder: string;
  disabled: boolean;
  field: ControllerRenderProps<any>;
};
const formSchema = z.object({
  email: z
    .string({
      required_error: "メアド入れろカス",
    })
    .email({
      message: "メアドちゃうわボケ",
    }),
  name: z.string({
    required_error: "名無しやめろ2chちゃうねん",
  }),
  content: z
    .string({
      required_error: "なんでここ空やねん何しに来たん",
    })
    .min(5, {
      message: "短すぎじゃアホ",
    })
    .max(1000, {
      message: "長すぎやバカタレ",
    }),
});

type SendState = "not_sent" | "sending" | "sent";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setSendState("sending");
    setTimeout(() => {
      // TODO: バックエンドでメールを送信する
      setSendState("sent");
      toast({
        title: "送信完了！",
        description: "お問い合わせを受け付けました。",
      });
    }, 1000);
  };

  const [sendState, setSendState] = useState<SendState>("not_sent");
  const MyInput: React.FC<MyInputProps> = React.memo(
    ({ placeholder, disabled, field }) => {
      return <Input placeholder={placeholder} disabled={disabled} {...field} />;
    },
  );

  const FormComponent = () => {
    return (
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <RenderFormItem
              label="メールアドレス"
              description="返信先のメールアドレス"
            >
              <MyInput
                placeholder="Enter your email"
                disabled={sendState === "sending"}
                field={field}
              />
            </RenderFormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <RenderFormItem label="おなまえ" description="あなたの名前">
              <MyInput
                placeholder="山田田中"
                disabled={sendState === "sending"}
                field={field}
              />
              {/* なんか再レンダリングされる？ */}
            </RenderFormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <RenderFormItem label="お問い合わせ内容">
              <Textarea
                placeholder="例: Webサイトのコンテンツが不十分です…"
                {...field}
                rows={10}
                disabled={sendState === "sending"}
              />
            </RenderFormItem>
          )}
        />
        <Button type="submit">
          {sendState === "sending" && (
            <div className="mr-1 h-5 w-5 animate-spin rounded-full border-2 border-t-transparent" />
          )}
          <FaPaperPlane className="mr-1" /> 送信
        </Button>
      </form>
    );
  };
  return (
    <Form {...form}>
      {sendState === "sent" ? (
        <>
          <p className="text-3xl font-light">Your message has been sent!</p>
          <hr className="my-5" />
          <p>お問い合わせを受け付けました。近いうちに返信します！</p>
          <p className="text-sm text-muted-foreground">
            このお問い合わせフォームはサンプルのものなので、実際には送信されていません！
          </p>
          <Button
            size="sm"
            className="my-5"
            variant="outline"
            onClick={() => setSendState("not_sent")}
          >
            お問い合わせページに戻る
          </Button>
        </>
      ) : (
        <FormComponent />
      )}
    </Form>
  );
};

export default Contact;
