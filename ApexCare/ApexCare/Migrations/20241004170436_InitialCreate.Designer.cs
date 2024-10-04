﻿// <auto-generated />
using System;
using ApexCare.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ApexCare.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20241004170436_InitialCreate")]
    partial class InitialCreate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("ApexCare.Models.Client", b =>
                {
                    b.Property<int>("ClientID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ClientID"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("ClientID");

                    b.ToTable("Clients");
                });

            modelBuilder.Entity("ApexCare.Models.Job", b =>
                {
                    b.Property<int>("JobID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("JobID"));

                    b.Property<int>("RequestID")
                        .HasColumnType("integer");

                    b.Property<int>("TechnicianID")
                        .HasColumnType("integer");

                    b.HasKey("JobID");

                    b.HasIndex("RequestID");

                    b.HasIndex("TechnicianID");

                    b.ToTable("Jobs");
                });

            modelBuilder.Entity("ApexCare.Models.JobStatus", b =>
                {
                    b.Property<int>("JobStatusID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("JobStatusID"));

                    b.Property<int>("JobID")
                        .HasColumnType("integer");

                    b.Property<string>("Message")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("Timestamp")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("JobStatusID");

                    b.HasIndex("JobID");

                    b.ToTable("JobStatuses");
                });

            modelBuilder.Entity("ApexCare.Models.Package", b =>
                {
                    b.Property<int>("PackageID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("PackageID"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<decimal>("FlatRate")
                        .HasColumnType("numeric");

                    b.HasKey("PackageID");

                    b.ToTable("Packages");
                });

            modelBuilder.Entity("ApexCare.Models.PackagePromotion", b =>
                {
                    b.Property<int>("PackagePromotionID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("PackagePromotionID"));

                    b.Property<decimal>("Discount")
                        .HasColumnType("numeric");

                    b.Property<int>("PackageID")
                        .HasColumnType("integer");

                    b.Property<DateTime>("ValidFrom")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime>("ValidTo")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("PackagePromotionID");

                    b.HasIndex("PackageID");

                    b.ToTable("PackagePromotions");
                });

            modelBuilder.Entity("ApexCare.Models.PackageService", b =>
                {
                    b.Property<int>("PackageServiceID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("PackageServiceID"));

                    b.Property<int>("PackageID")
                        .HasColumnType("integer");

                    b.Property<int>("ServiceID")
                        .HasColumnType("integer");

                    b.HasKey("PackageServiceID");

                    b.HasIndex("PackageID");

                    b.HasIndex("ServiceID");

                    b.ToTable("PackageServices");
                });

            modelBuilder.Entity("ApexCare.Models.Request", b =>
                {
                    b.Property<int>("RequestID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("RequestID"));

                    b.Property<int>("ClientID")
                        .HasColumnType("integer");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Priority")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Service")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("RequestID");

                    b.HasIndex("ClientID");

                    b.ToTable("Requests");
                });

            modelBuilder.Entity("ApexCare.Models.RequestMessage", b =>
                {
                    b.Property<int>("RequestMessageID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("RequestMessageID"));

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("RequestID")
                        .HasColumnType("integer");

                    b.HasKey("RequestMessageID");

                    b.HasIndex("RequestID");

                    b.ToTable("RequestMessages");
                });

            modelBuilder.Entity("ApexCare.Models.Review", b =>
                {
                    b.Property<int>("ReviewID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ReviewID"));

                    b.Property<string>("Feedback")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("JobID")
                        .HasColumnType("integer");

                    b.Property<int>("Rating")
                        .HasColumnType("integer");

                    b.HasKey("ReviewID");

                    b.HasIndex("JobID")
                        .IsUnique();

                    b.ToTable("Reviews");
                });

            modelBuilder.Entity("ApexCare.Models.Service", b =>
                {
                    b.Property<int>("ServiceID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ServiceID"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("ServiceID");

                    b.ToTable("Services");
                });

            modelBuilder.Entity("ApexCare.Models.Skill", b =>
                {
                    b.Property<int>("SkillID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("SkillID"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("SkillID");

                    b.ToTable("Skills");
                });

            modelBuilder.Entity("ApexCare.Models.Subscription", b =>
                {
                    b.Property<int>("SubscriptionID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("SubscriptionID"));

                    b.Property<int>("ClientID")
                        .HasColumnType("integer");

                    b.Property<DateTime>("DateSubscribed")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("PackageID")
                        .HasColumnType("integer");

                    b.Property<int>("TermID")
                        .HasColumnType("integer");

                    b.HasKey("SubscriptionID");

                    b.HasIndex("ClientID");

                    b.HasIndex("PackageID");

                    b.HasIndex("TermID");

                    b.ToTable("Subscriptions");
                });

            modelBuilder.Entity("ApexCare.Models.Technician", b =>
                {
                    b.Property<int>("TechnicianID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("TechnicianID"));

                    b.Property<string>("Company")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("TechnicianID");

                    b.ToTable("Technicians");
                });

            modelBuilder.Entity("ApexCare.Models.TechnicianSkill", b =>
                {
                    b.Property<int>("TechnicianSkillID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("TechnicianSkillID"));

                    b.Property<int>("SkillID")
                        .HasColumnType("integer");

                    b.Property<int>("TechnicianID")
                        .HasColumnType("integer");

                    b.HasKey("TechnicianSkillID");

                    b.HasIndex("SkillID");

                    b.HasIndex("TechnicianID");

                    b.ToTable("TechnicianSkills");
                });

            modelBuilder.Entity("ApexCare.Models.Term", b =>
                {
                    b.Property<int>("TermID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("TermID"));

                    b.Property<decimal>("RelativeRate")
                        .HasColumnType("numeric");

                    b.Property<string>("TermLength")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("TermID");

                    b.ToTable("Terms");
                });

            modelBuilder.Entity("ApexCare.Models.Job", b =>
                {
                    b.HasOne("ApexCare.Models.Request", "Request")
                        .WithMany("Jobs")
                        .HasForeignKey("RequestID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ApexCare.Models.Technician", "Technician")
                        .WithMany("Jobs")
                        .HasForeignKey("TechnicianID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Request");

                    b.Navigation("Technician");
                });

            modelBuilder.Entity("ApexCare.Models.JobStatus", b =>
                {
                    b.HasOne("ApexCare.Models.Job", "Job")
                        .WithMany("JobStatuses")
                        .HasForeignKey("JobID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Job");
                });

            modelBuilder.Entity("ApexCare.Models.PackagePromotion", b =>
                {
                    b.HasOne("ApexCare.Models.Package", "Package")
                        .WithMany("PackagePromotions")
                        .HasForeignKey("PackageID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Package");
                });

            modelBuilder.Entity("ApexCare.Models.PackageService", b =>
                {
                    b.HasOne("ApexCare.Models.Package", "Package")
                        .WithMany("PackageServices")
                        .HasForeignKey("PackageID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ApexCare.Models.Service", "Service")
                        .WithMany("PackageServices")
                        .HasForeignKey("ServiceID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Package");

                    b.Navigation("Service");
                });

            modelBuilder.Entity("ApexCare.Models.Request", b =>
                {
                    b.HasOne("ApexCare.Models.Client", "Client")
                        .WithMany("Requests")
                        .HasForeignKey("ClientID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Client");
                });

            modelBuilder.Entity("ApexCare.Models.RequestMessage", b =>
                {
                    b.HasOne("ApexCare.Models.Request", "Request")
                        .WithMany("RequestMessages")
                        .HasForeignKey("RequestID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Request");
                });

            modelBuilder.Entity("ApexCare.Models.Review", b =>
                {
                    b.HasOne("ApexCare.Models.Job", "Job")
                        .WithOne("Review")
                        .HasForeignKey("ApexCare.Models.Review", "JobID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Job");
                });

            modelBuilder.Entity("ApexCare.Models.Subscription", b =>
                {
                    b.HasOne("ApexCare.Models.Client", "Client")
                        .WithMany("Subscriptions")
                        .HasForeignKey("ClientID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ApexCare.Models.Package", "Package")
                        .WithMany("Subscriptions")
                        .HasForeignKey("PackageID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ApexCare.Models.Term", "Term")
                        .WithMany("Subscriptions")
                        .HasForeignKey("TermID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Client");

                    b.Navigation("Package");

                    b.Navigation("Term");
                });

            modelBuilder.Entity("ApexCare.Models.TechnicianSkill", b =>
                {
                    b.HasOne("ApexCare.Models.Skill", "Skill")
                        .WithMany("TechnicianSkills")
                        .HasForeignKey("SkillID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ApexCare.Models.Technician", "Technician")
                        .WithMany("TechnicianSkills")
                        .HasForeignKey("TechnicianID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Skill");

                    b.Navigation("Technician");
                });

            modelBuilder.Entity("ApexCare.Models.Client", b =>
                {
                    b.Navigation("Requests");

                    b.Navigation("Subscriptions");
                });

            modelBuilder.Entity("ApexCare.Models.Job", b =>
                {
                    b.Navigation("JobStatuses");

                    b.Navigation("Review")
                        .IsRequired();
                });

            modelBuilder.Entity("ApexCare.Models.Package", b =>
                {
                    b.Navigation("PackagePromotions");

                    b.Navigation("PackageServices");

                    b.Navigation("Subscriptions");
                });

            modelBuilder.Entity("ApexCare.Models.Request", b =>
                {
                    b.Navigation("Jobs");

                    b.Navigation("RequestMessages");
                });

            modelBuilder.Entity("ApexCare.Models.Service", b =>
                {
                    b.Navigation("PackageServices");
                });

            modelBuilder.Entity("ApexCare.Models.Skill", b =>
                {
                    b.Navigation("TechnicianSkills");
                });

            modelBuilder.Entity("ApexCare.Models.Technician", b =>
                {
                    b.Navigation("Jobs");

                    b.Navigation("TechnicianSkills");
                });

            modelBuilder.Entity("ApexCare.Models.Term", b =>
                {
                    b.Navigation("Subscriptions");
                });
#pragma warning restore 612, 618
        }
    }
}
