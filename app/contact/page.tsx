"use client";
import { useForm } from "react-hook-form";
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
import { ContactFormSchema } from "../schema/ContactFormSchema";
import React from "react";

type SendState = "not_sent" | "sending" | "sent";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = (values: z.infer<typeof ContactFormSchema>) => {
    console.log(values);
    setSendState("sending");
    const request = fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
    });
    request
      .then(() => {
        setSendState("sent");
        toast({
          title: "送信完了！",
          description: "お問い合わせを受け付けました。",
        });
      })
      .catch(() => {
        setSendState("not_sent");
        toast({
          title: "送信失敗",
          description: "送信中にエラーが発生しました。",
          color: "desructive",
        });
      });
    setTimeout(() => {
      // TODO: バックエンドでメールを送信する
    }, 1000);
  };

  const [sendState, setSendState] = useState<SendState>("not_sent");

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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <RenderFormItem
                label="メールアドレス"
                description="返信先のメールアドレス"
              >
                <Input
                  placeholder="user@example.com"
                  disabled={sendState === "sending"}
                  autoComplete="off"
                  {...field}
                />
              </RenderFormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <RenderFormItem label="おなまえ" description="あなたの名前">
                <Input
                  placeholder="山田田中"
                  disabled={sendState === "sending"}
                  autoComplete="off"
                  {...field}
                />
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
          <Button type="submit" disabled={sendState !== "not_sent"}>
            {sendState === "sending" && (
              <div className="mr-1 h-5 w-5 animate-spin rounded-full border-2 border-t-transparent" />
            )}
            <FaPaperPlane className="mr-1" />{" "}
            {sendState === "not_sent" ? "送信" : "送信中…"}
          </Button>
        </form>
      )}
    </Form>
  );
};

export default Contact;
