---
layout: post
title: "OS Kernel"
date: 2024-02-05 18:30:00 +0300
categories: operating-system
tags: [Cybersecurity, Software]
featured_image: /assets/images/os.png
content-source: https://chat.openai.com
tldr: An operating system uses a kernel to communicate with the hardware of its host machine. Let's dive deeper into its operations and its functions.
---

The world of operating systems, kernels, computer sciences and how everything works together are quite difficult to both understand, and write about. But I'll try my best.

<hr />

## Acronyms & Important Concepts

- OS: operating system
  - Lets a user interact with some underlying hardware.
- CPU: Central processing unit
  - It's the brain of the computer.
- RAM: Random-access memory
  - Works with the CPU to store and handle working data.
- Threads
  - Allows a process to perform multiple operations simultaneously.
- System calls
  - Processes and programs uses system call functions to interact with the OS via the kernel.

<b>Processes</b> are the main part of an OS, a process is just a program that is executed by one ore more threads. A process is made up of: the program code (binary, i.e. ones and zeros), program counter, processors registers, process stack, heap and its state. I wont go into more details about processes, but just remember that its essentially a program that is being executed, evolving both its own code and current state.

Processes are often split into two categories, with security and efficiency as their main goal:

- User Processes
  - These are processes and actions that the user is able to initiate, and control.
  - Handled by the user as a less privileged user mode/space.
  - User mode, where most of the user processes, programs and, applications, and some OS systems, are running.
  - Firefox, Photoshop, Word etc.
- System Processes
  - Also called system daemons in Unix environments, these operate and run in the background and are important for the stable and efficient running of the OS.
  - These will run in a privileged kernel mode/space.
  - These processes are executed in kernel mode. The core OS operations and systems are run here, it's highly privileged and has access to the underlying hardware.
  - Will not be interacted by or rarely seen by the end user.
  - Management of system resources, device management, lower level system services etc.

We split applications, systems, services and processes into certain systems with the end goal of security and stability. By having the core OS features and operations separated from the user interactive applications and processes we will have an easier time both developing applications, and handling complex modern systems more easily. Not all types of OSs, and kernel types separate the processes and systems this way, but I'll go more into detail about that later.

<hr />

## Kernel 101

The kernel is the most important part of the huge structure of modern operating systems. It is a key component that in essence lets the OS efficiently work with mainly the CPU and RAM to manage memory and time. The kernel is the main part between the hardware and the OS. It's called a kernel due to the fact that it sits inside the OS as a popcorn kernel. These hardware types can be: computers, "smart" devices, tablets, servers etc.

Some of a kernels core operations are:

- Disk, processes, task, and, memory management.
- Device control.
- Launching and handling applications.
- Networking management.
- Works as a hardware and processes interpreter.
- System calls and inter-process communications (IPC).

These are just some of the broader level concepts that the kernel handles.

The kernel is one of the first processes/programs that gets loaded into the working memory when the hardware is started, and it stays in the memory until the hardware shuts down.

The kernel uses a type of table to keep track of all running processes.

{% include content-source.html image_path="/assets/images/data_center-kernel_layout.png" alt_text="kernel" image_src="https://www.techtarget.com/searchdatacenter/definition/kernel" %}

<hr />

## Kernel On Boot

The kernel can operate in two modes: kernel, and user modes. The kernel mode is used during the booting process, and it has full access to the underlying hardware. The user mode has limited access to keep the OS and the hardware secure.

1. Boot process

- The hardware is powered on, the BIOS/UEFI is the initial software that runs, it does a POST to verify the hardware components.
- The BIOS will then find and select a boot device (CD, USB, HDD etc.) The boot device will contain a bootloader, which will handle the loading of the OS's kernel.

2. Kernel loading

- After the bootloader has loaded the kernel into a protected memory space it will often be compressed, and then it will begin to execute its code.
- The BIOS gives control to the kernel.

3. Hardware initialization

- The kernel will find and initializes parts of the hardware such as the CPU, memory management unit (MMU), and other components such as: monitors, keyboards etc.
- All the available device drivers will be loaded from either within or by the kernel. Drivers are software that aids in the communication between the kernel and different hardware components often produced by different types of vendors and makers.

4. System process

- Certain core processes, services and/or daemons such as systemd, init etc. are launched to later handle other services and processes in the OS.

5. User space

- After the core processes are running the control is given to user specific processes and applications such as graphical user interface (GUI).
- The kernel is running in the background to handle system calls, manage hardware resources and low level operations.

6. User interaction

- The user is able to interact fully with the OS either via the command line (CMD), or the GUI.
- The applications that the user can run will be handled by processes that the kernel manages via system call, and other processes.

<hr />

## Kernel Types

There are different types of kernel types:

- Monolithic (Windows, Linux)
  - The most commonly found kernel where the entire OS runs on one address space in kernel mode. Both the user and kernel systems runs on the same address. Having all the systems (drivers, file system etc.) on the same address space is a faster approach than other kernel types, but it can lead to security risks. If one system fails, the entire OS shuts down.
- Micro (Minix)
  - Often found in minimalistic approaches where system resources are controlled, it's often found running as few as possible services and processes. Moving the system services to the user space. Offering better security, but will often suffer from worse performance compared to other kernel types.
- Exo
  - This setup lets applications access hardware resources directly, here the kernel does not perform as much as in more commonly found kernel types. It does aid in eliminating overheads and boosting performance, at the loss of security and stability.
- Hybrid (Windows NT, XNU)
  - This setup is just as is sounds, it combines monolithic and micro kernel concepts. Running some services and processes in kernel space, whilst others are in user space.
- Nano
  - Its a form of micro kernel but even further stripped down to just the minimum. Focusing on managing process and system to handle timers, and hiccups, and moving the other services to run in user space. This is used for limited resource systems, or when response times are crucial.

All kernels focuses on different concepts, outcomes and special needs of its end users. We have nano and micro that focuses on fast response times, but at the cost of moving the services to user space. The most used home user systems uses monolithic kernel types, and these are a good combinations of user and kernel space.

<hr />

## Security concerns

The kernel is a sensitive part in computers, when we look at cyber security and the damage that can be done by letting a bad actor, or malware interact and use a victims kernel to do malicious things. That is why we have certain concepts in place to protect the lower-level systems such as the CPU, RAM, BIOS, and kernel from being tampered with. These systems are: Trusted platform module (TPM), access controls, sandboxing, secure booting, and encryption etc.

### Types of attacks

- Rootkits
  - They are malicious code that gets installed onto a system to enable bad-actors to gain control of a system without being detected. They often modify or change certain parts of an OS or kernel files to hide themselves.
- Buffer overflow attacks
  - Often seen exploiting flaws in software, or even OSs, by exploiting a buffer's boundaries by overwriting its memory. This can allow a bad-actor to execute code, escalate privileges etc. Often found with improper input validations.
- Kernel exploits
  - Finding exploits in the kernel can be devastating for the entire OS, and its hardware. Having access to the most important part of the OS will give a bad-actor the access and privileges it needs to escalate privileges, execute code, interrupt the boot process, and modify and damage systems, the OS and other applications running etc.

<hr />

## Conclusion

So we've looked at a more simpler view of the kernel and its operations in modern computers. It is a core concept and type of system that is essential in modern computing and operating systems. The rise of quantum computers, will challenge the kernels current usages, but we'll still have the current kernel structure for years to come.

It is very difficult to bring up all the information about kernels, the OS, and other lower level concepts in just blog post. But I hope that I'll be able to write more about all of these concepts as time goes on. I'll want to bring up concept such as: TPM, sandboxing, RAM, CPU, multi-threading, the BIOS etc., in more detail, but for now this is all, thank you for reading!

{% include content-source.html image_path="/assets/images/popcorn.gif" alt_text="popcorn" image_src="https://tenor.com/view/popcorn-gif-26924114" %}
